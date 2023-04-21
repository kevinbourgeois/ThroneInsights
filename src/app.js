import {getData} from "./api";
import {select} from "d3-selection";
import {scaleBand, scaleLinear} from "d3-scale";
import * as d3 from 'd3'

const templatePopUp = document.querySelector('#template-pop-up')


getData.then(episodes => {

    //Dessin du graph
    var svg = select("#graph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    //Juste le numéro de tout les épisodes
    var arrNoEpisode = episodes.map(episode => episode.noEpisodeOverall);

    console.log(arrNoEpisode)
    console.log(['1', '2', '3', '4'])
    const tab = ['1', '2', '3', '4', '5', '6', '8', '9', '10', '11', '12']

    console.log(d3.extent(tab))

    // Echelle
    let echelleEpisodes = scaleLinear()
        .domain([1,73])
        .range([0, width])
        .clamp(true)

        //.paddingInner(0.5);

    var echelleViewers = scaleLinear()
        .domain([0, 15])
        .range([height, 0])
        .clamp(true)


    let axeXEpisodes = d3.axisBottom(echelleEpisodes)
        //.tickFormat(d3.format('d'));
    let axeYViewers = d3.axisLeft(echelleViewers)


    const g = svg.append('g')


    // Set clip region, rect with same width/height as "drawing" area, where we will be able to zoom in
    g.append('defs')
        .append('clipPath')
        .attr('id', 'clip')
        .append('rect')
        //.attr('x', 0-margin.left)
        .attr('x', 0)
        .attr('y', 0)
        //.attr('y', 0-margin.top)
        .attr('width', width)
        .attr('height', height);

    const main = g.append('g')
        .attr('class', 'main')
        .attr('clip-path', 'url(#clip)');


    var xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "x-axis")
        .call(axeXEpisodes);

    var yAxis = svg.append("g")
        .attr("class", "y-axis")
        .call(axeYViewers);










    var line = d3.line()
        .x(function (d) {
            return echelleEpisodes(d.noEpisodeOverall);
        })
        .y(function (d) {
            return echelleViewers(d.viewers);
        });


    //Dessine la ligne du graph
    main.append('path')
        .datum(episodes)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 3)
        .attr("class", "line-graph")



    //Dessine les points du graph
    main
        .selectAll("circle")
        .data(episodes)
        .join(enter => enter.append("circle")
            .attr('r', 5)
            .attr("cx", (d) => echelleEpisodes(d.noEpisodeOverall))
            .attr("cy", (d) => echelleViewers(d.viewers))
            .attr("fill", "blue")
            .attr("class", "dot")
            .on("mouseover", (e, d) => {
                const title = d.title

                console.log(echelleViewers(d.noEpisodeOverall))
                console.log(echelleViewers(d.viewers))


                const copyPopUp = templatePopUp.content.cloneNode(true)

                document.querySelector('body').append(copyPopUp)

                const popUp = document.querySelector('#pop-up')

                popUp.style.left = e.pageX + "px"
                popUp.style.top = e.pageY - 200 + "px"

                //Mets les données dans la popup
                popUp.querySelector('h2').textContent = title

            })
            .on("mouseout", () => {
                document.getElementById('pop-up').remove()
            })

)

    const zoom = d3.zoom()
        .scaleExtent([1.1, 2])
        .translateExtent([[0, 0], [width+margin.left, height]])
        .on("zoom", zoomed);

    function initZoom() {
        d3.select('svg')
            .call(zoom);
    }

    function zoomed(e) {
        svg.select('.line-graph').attr("transform", e.transform);
        svg.selectAll('.dot').attr("transform", e.transform);

        // Régénerer un axe à chaque fois qu'on zoom
        let newX = e.transform.rescaleX(echelleEpisodes);
        let newY = e.transform.rescaleY(echelleViewers);


        // Appeler le nouveau zoom
        xAxis.call(axeXEpisodes.scale(newX));
        yAxis.call(axeYViewers.scale(newY));

    }

    initZoom();


})






const margin = {top: 10, right: 40, bottom: 30, left: 40}
const width = 1400 - margin.left - margin.right;



const height = 600 - margin.top - margin.bottom;



import {getData} from "./api";
import {select} from "d3-selection";
import {scaleBand, scaleLinear} from "d3-scale";
import {axisBottom, axisLeft} from "d3-axis";
import * as d3 from 'd3'
import {zoom} from "d3";
import band from "d3-scale/src/band";
import {event as d3event} from'd3-selection'
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



    // Echelle
    var bandScale = scaleBand()
        .domain(arrNoEpisode)
        .range([0, width])
        .paddingInner(0.5);

    var linearScale = scaleLinear()
        .domain([0, 15])
        .range([height, 0])


    var xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "x-axis")
        .call(d3.axisBottom(bandScale));

    var yAxis = svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(linearScale));

    var line = d3.line()
        .x(function (d, i) {
            return bandScale(d.noEpisodeOverall);
        })
        .y(function (d) {
            return linearScale(d.viewers);
        });

    //Dessine la ligne du graph
    svg.append('path')
        .datum(episodes)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 3)
        .attr("class", "line-graph")


    //Dessine les points du graph
    svg
        .selectAll("rect")
        .data(episodes)
        .join(enter => enter.append("circle")
            .attr('r', 5)
            .attr("cx", (d) => bandScale(d.noEpisodeOverall))
            .attr("cy", (d) => linearScale(d.viewers))
            .attr("fill", "blue")
            .attr("class", "dot")
            .on("mouseover", (e, d) => {
                const title = d.title

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
        .scaleExtent([1, 5])
        .on("zoom", zoomed);

    function initZoom() {
        d3.select('svg')
            .call(zoom);
    }

    function zoomed({ transform }) {
        svg.select('.line-graph').attr("transform", transform);
        svg.selectAll('.dot').attr("transform", transform);
        // Régénerer un axe à chaque fois qu'on zoom


    }

    initZoom();


})






const margin = {top: 10, right: 40, bottom: 30, left: 40}
const width = 1200 - margin.left - margin.right;



const height = 600 - margin.top - margin.bottom;



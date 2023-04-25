import {getData} from "./api";
import {select} from "d3-selection";
import {scaleBand, scaleLinear} from "d3-scale";
import * as d3 from 'd3'
import { drawAllSymbols } from "./symbols";

const templatePopUp = document.querySelector('#template-pop-up')

/*
    Chargement des données tout ce qui suit s'éxécute
 */
getData.then(episodes => {

    //Dessin de la zone du futur graph
    var svg = select("#graph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    //Récupère les données et créé tableau avec le numéro de chaque épisodes
    const arrNoEpisode = episodes.map(episode => episode.noEpisodeOverall);


    // Définition des échelles

    //échelle pour l'axe x
    let echelleEpisodes = scaleLinear()
        .domain([1,73])
        .range([0, width])
        .clamp(true)

    //échelle pour l'axe y
    var echelleViewers = scaleLinear()
        .domain([0, 15])
        .range([height, 0])
        .clamp(true)


    //création des deux l'échelles
    let axeXEpisodes = d3.axisBottom(echelleEpisodes)
    let axeYViewers = d3.axisLeft(echelleViewers)


    const g = svg.append('g')

    //Création de la zone de clip, ce qui va faire que le graph ne sortira pas en passant par dessus le html
    g.append('defs')
        .append('clipPath')
        .attr('id', 'clip')
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width)
        .attr('height', height);

    const main = g.append('g')
        .attr('class', 'main')
        .attr('clip-path', 'url(#clip)');


    //Création et des deux axes dans le SVG

    //Axe X
    var xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "x-axis")
        .call(axeXEpisodes);

    //Axe y
    var yAxis = svg.append("g")
        .attr("class", "y-axis")
        .call(axeYViewers);

    //Définition des coordonées des points de la ligne
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



    //Dessine les points du graph sur la ligne
    main
        .selectAll("circle")
        .data(episodes)
        .join(enter => enter.append("circle")
            .attr('r', 5)
            .attr("cx", (d) => echelleEpisodes(d.noEpisodeOverall))
            .attr("cy", (d) => echelleViewers(d.viewers))
            .attr("fill", "blue")
            .attr("class", "dot")
            .on("mouseover", (e, d, i) => {
                const copyPopUp = templatePopUp.content.cloneNode(true)

                document.querySelector('body').append(copyPopUp)

                const popUp = document.querySelector('#pop-up')


                popUp.style.left = (e.pageX-70) + "px"
                popUp.style.top = e.pageY - 500 + "px"

                if (d.noEpisodeOverall !== '1') {
                const varianceViewers = d.viewers - episodes[d.noEpisodeOverall-2].viewers;
                const divVariance =  document.querySelector('#variance')


                let arrowHTML = "";
                if (varianceViewers > 0) {
                    arrowHTML = "<span id=arrow-up class=\"material-symbols-outlined\">\n" +
                                "trending_up\n" +
                                "</span>"
                } else {
                    arrowHTML = "<span id=arrow-down class=\"material-symbols-outlined\">\n" +
                                "trending_down\n" +
                                "</span>"
                }



                popUp.querySelector('#variance').textContent = Math.abs(varianceViewers.toFixed(2)*1000) + 'k Viewers'
                divVariance.insertAdjacentHTML("afterbegin", arrowHTML)
                    }
//Mets les données dans la popup
                popUp.querySelector('#title').textContent = "S" + d.season + " E " + d.noEpisodeSeason + " " +  d.title
                popUp.querySelector('#synopsis').textContent = (d.synopsis).slice(0, 100) + '...';
                popUp.querySelector('#synopsis').textContent = (d.synopsis);
            })
            .on("mouseout", () => {
                document.getElementById('pop-up').remove()
            })

)

    //récupère la node list tout les éléments avec la class dot et les stock dans une variable
    const dots = document.querySelectorAll('.dot') 

    drawAllSymbols(dots)

    


    //TODO : Faire en sorte que l'on arrive sur une position déjà zoomée po

    //Création du zoom
    const zoom = d3.zoom()
        .scaleExtent([1.1, 2])
        .translateExtent([[0, 0], [width+margin.left+margin.right, height]])
        .on("zoom", zoomed);

    //Ajout du zoom sur la zone du svg
    function initZoom() {
        d3.select('svg')
            .call(zoom);
    }

    /*
        Fonction appelée à chaque fois que l'user clique, ou fait aller la molette
     */
    function zoomed(e) {
        g.select('.line-graph').attr("transform", e.transform);
        g.selectAll('.dot').attr("transform", e.transform);
        g.selectAll('.symbol').attr("transform", e.transform);

        // Régénerer un axe à chaque fois qu'on zoom
        let newX = e.transform.rescaleX(echelleEpisodes);
        let newY = e.transform.rescaleY(echelleViewers);


        // Appeler le nouveau zoom
        xAxis.call(axeXEpisodes.scale(newX));
        yAxis.call(axeYViewers.scale(newY));

    }



    document.querySelector('#s1').addEventListener('click', () => {
        zooms1()
    })

    //TODO: Faire en sorte que ça se déplace et ça zoome sur les épisodes de la saison1
    function zooms1() {
        d3.select('svg')
            .transition()
            .call(zoom.translateTo, 100, 100);
    }

    //Ajoute le zoom sur le SVG
    initZoom();


})


const margin = {top: 10, right: 40, bottom: 30, left: 40}
const width = 1500 - margin.left - margin.right;


const height = 700 - margin.top - margin.bottom;



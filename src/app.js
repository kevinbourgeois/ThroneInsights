import {getData} from "./api";
import {select} from "d3-selection";
import {scaleBand, scaleLinear} from "d3-scale";
import * as d3 from 'd3'
import { drawAllSymbols, drawSeasonsDots } from "./symbols";

const templatePopUp = document.querySelector('#template-pop-up')
// Get the modal
const modal = document.getElementById("myModal");

//read insights.json file
const insights = require('../ressources/insights.json');

console.log(insights)
//récupère l'objet dans insights qui a la propriété episode 1
const insightEpisode1 = insights.find(insight => insight.episode === "11")
console.log(insightEpisode1)

/*
    Chargement des données tout ce qui suit s'éxécute
 */
getData.then(episodes => {

    console.log(episodes)

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
    let axeYViewers = d3.axisLeft(echelleViewers).tickSize(-innerWidth)



    const g = svg.append('g')

    //Création de la zone de clip, ce qui va faire que le graph ne sortira pas en passant par dessus le html
    g.append('defs')
        .append('clipPath')
        .attr('id', 'clip')
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 1400)
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
        .attr('stroke', 'black')
        .attr('stroke-width', 2)
        .attr("class", "line-graph")



    //Dessine les points du graph sur la ligne
    main
        .selectAll("circle")
        .data(episodes)
        .join(enter => enter.append("circle")
            .attr('r', 3)
            .attr("cx", (d) => echelleEpisodes(d.noEpisodeOverall))
            .attr("cy", (d) => echelleViewers(d.viewers))
            .attr("fill", "blue")
            .attr("class", "dot")
            .attr("stroke", "black")
            .on("mouseover", (e, d, i) => {
                const copyPopUp = templatePopUp.content.cloneNode(true)

                document.querySelector('body').append(copyPopUp)

                const popUp = document.querySelector('#pop-up')


                popUp.style.left = (e.pageX-70) + "px"
                popUp.style.top = e.pageY + 10 +  "px"

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
                //popUp.querySelector('#synopsis').textContent = (d.synopsis).slice(0, 100) + '...';
                //popUp.querySelector('#synopsis').textContent = (d.synopsis);
            })
            .on("mouseout", () => {
                document.getElementById('pop-up').remove()
            })
            .on("click", (e, d, i) => {
                modal.style.display = "block";
                modal.querySelector('#episode-modal').textContent = "S" + d.season + " E " + d.noEpisodeSeason
                modal.querySelector('#title-modal').textContent = d.title
                modal.querySelector('#synopsis-modal').textContent = d.synopsis
                //modal.querySelector('#insight-modal').textContent
                const insightEpisode = insights.find(insight => insight.episode === d.noEpisodeOverall)
                
                if (insightEpisode) {
                    modal.querySelector('#insight-modal').textContent = insightEpisode.insight
                } else {
                    modal.querySelector('#insight-modal').textContent = ""
                }

            

                
            })

)

    //récupère la node list tout les éléments avec la class dot et les stock dans une variable
    const dots = document.querySelectorAll('.dot') 

    

    drawAllSymbols(dots)
    drawSeasonsDots(dots)

    console.log(dots[5].cy.baseVal.value)



    //TODO : Faire en sorte que l'on arrive sur une position déjà zoomée po

    //Création du zoom
    const zoom = d3.zoom()
        .scaleExtent([1.1, 5])
        //-10 -20 pour que les symbols ne sorte pas du svg
        .translateExtent([[-10, -100], [width + margin.left +margin.right, height]])
        // ancienne valeur .translateExtent([[0, 0], [width + margin.left +margin.right, height]])
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





    //TODO: Quand on zoom ça casse les coordonées
    function zoomsSeason(dot) {
        d3.select('svg')
            .transition()
            .call(zoom.scaleTo, 5, [echelleEpisodes(dot.cx.baseVal.value) - 10, echelleViewers(dot.cx.baseVal.value)])
    }

    function resetZoom() {
        d3.select('svg')
            .transition()
            .call(zoom.scaleTo, 1, [0, 0])
    }


    
    
    document.querySelector('#s1').addEventListener('click', () => {
        resetZoom()
        zoomsSeason(dots[0])
    })
    document.querySelector('#s2').addEventListener('click', () => {
        resetZoom()
        zoomsSeason(dots[10])
    })
    
    document.querySelector('#s3').addEventListener('click', () => {
        zoomsSeason(dots[20])
    })
    
    document.querySelector('#s4').addEventListener('click', () => {
        zoomsSeason(dots[0])
    })
    
    document.querySelector('#s5').addEventListener('click', () => {
        zoomsSeason(dots[0])
    })
    
    document.querySelector('#s6').addEventListener('click', () => {
        zoomsSeason(dots[0])
    })
    
    document.querySelector('#s7').addEventListener('click', () => {
        zoomsSeason(dots[0])
    })
    
    document.querySelector('#s8').addEventListener('click', () => {
        zoomsSeason(dots[0])
    })
    
    document.querySelector('#btn-all').addEventListener('click', () => {
        resetZoom()
    })

    //console log les coordonnées de la souris dans le svg quand on clique
    svg.on('click', function (e) {
        console.log(d3.pointer(e, this))
    })



    //Ajoute le zoom sur le SVG
    initZoom();


})


const margin = {top: 10, right: 40, bottom: 30, left: 40}
const width = 1400 - margin.left - margin.right;


const height = 600 - margin.top - margin.bottom;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }



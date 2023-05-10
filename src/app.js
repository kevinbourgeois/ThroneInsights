import {getData} from "./api";
import {select} from "d3-selection";
import {scaleBand, scaleLinear} from "d3-scale";
import * as d3 from 'd3'
import { drawAllSymbols, drawSeasonsDots } from "./symbols";

 
//importe le fichier filter.js
import {filter} from "./filter";

const SELECTED_STROKE_WIDTH = 4;
const REGULAR_STROKE_WIDTH = 2;

const templatePopUp = document.querySelector('#template-pop-up')
// Get the modal
const modal = document.getElementById("myModal");

const popUp = document.querySelector('#popup-episode');
//read insights.json file
const insights = require('../ressources/insights.json');

const LINE_WIDTH = 1.5;

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
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        
        
        select('svg g').append('text').text('Episodes').style('fill', 'white').attr('x', width/2).attr('y', height + 20).attr('id', 'xAxis-label')

 



    //Récupère les données et créé tableau avec le numéro de chaque épisodes
    const arrNoEpisode = episodes.map(episode => episode.noEpisodeOverall);


    // Définition des échelles

    //échelle pour l'axe x
    let echelleEpisodes = scaleLinear()
        .domain([1,73])
        .range([20, width + 2000])
        .clamp(true)

    //échelle pour l'axe y
    var echelleViewers = scaleLinear()
        .domain([0, 15])
        .range([height, 0])
        .clamp(true)


    //création des deux l'échelles
    let axeXEpisodes = d3.axisBottom(echelleEpisodes)
    let axeYViewers = d3.axisLeft(echelleViewers).tickSize(-innerWidth)

    
    /*
        Configuration de la graduation de l'axe Y
    */
    axeYViewers.tickFormat(d => d + 'm')
    
    axeYViewers.ticks(5)
    
    axeYViewers.tickPadding(10)

    /*
        Configuration de la graduation de l'axe X
    */
    axeXEpisodes.ticks(0)
    axeXEpisodes.tickSize(0)


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
        .attr('stroke', 'white')
        .attr('stroke-width', LINE_WIDTH)
        .attr("class", "line-graph")


    //donne moi la position en y du svg depuis le haut de la page html 
    const svgPositionTop = svg.node().getBoundingClientRect().top + window.scrollY;
    const svgPositionLeft = svg.node().getBoundingClientRect().left + window.scrollX;

    const filterContainer = document.querySelector('#filters-container')  
    filterContainer.style.top = svgPositionTop + 20 + 'px'
    filterContainer.style.left = svgPositionLeft + 60 + 'px' 
    filterContainer.style.display = 'block' 



    //Dessine les points du graph sur la ligne
    main
        .selectAll("circle")
        .data(episodes)
        .join(enter => enter.append("circle")
            .attr('r', 6)
            .attr("cx", (d) => echelleEpisodes(d.noEpisodeOverall))
            .attr("cy", (d) => echelleViewers(d.viewers))
            .attr("fill", "blue")
            .attr("class", "dot")
            .attr("stroke", "black")
            .attr("stroke-width", 3)
            .on("mouseover", (e, d, i) => {
                popUp.style.display = "block";
                popUp.style.position = "absolute";
                popUp.style.top = e.layerY - 30 + "px";
                popUp.style.left = e.clientX + 10 + "px";


                if (d.noEpisodeOverall !== '1') {
                var varianceViewers = d.viewers - episodes[d.noEpisodeOverall-2].viewers;
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


                popUp.querySelector('#episode').textContent = "S" + d.season + " E " + d.noEpisodeSeason

            })
            .on("mouseout", () => {
                popUp.style.display = "none";
                popUp.querySelector('#variance').textContent = ""
                popUp.querySelector('#episode').textContent = ""
            })
            .on("click", (e, d, i) => {

             

                modal.style.display = "block";
                modal.querySelector('#episode-modal').textContent = "S0" + d.season + " E0" + d.noEpisodeSeason
                modal.querySelector('#title-modal').textContent =  d.title.toUpperCase()
                modal.querySelector('#synopsis-modal').textContent = d.synopsis
                

                if (d.noEpisodeOverall !== '1') {
                    var varianceViewers = d.viewers - episodes[d.noEpisodeOverall-2].viewers;
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
                    modal.querySelector('#variance-modal').textContent = " " + Math.abs(varianceViewers.toFixed(2)*1000) + 'k Viewers'
                    modal.querySelector('#variance-modal').insertAdjacentHTML("afterbegin", arrowHTML)
                }



                const insightEpisode = insights.find(insight => insight.episode === d.noEpisodeOverall)

                if (insightEpisode) {
                    

                    modal.querySelector('#insight-modal').style.display = "block"
                    //ajoute un titre à l'insight

                    modal.querySelector('#insight-modal').textContent = insightEpisode.insight
                    modal.querySelector('#insight-modal').insertAdjacentHTML("afterbegin", "<h4 id='title-insight'>Our Insight</h4>")
                } else {
                    modal.querySelector('#insight-modal').style.display = "none"
                }

            

                
            })

)





    //récupère la node list tout les éléments avec la class dot et les stock dans une variable
    const dots = document.querySelectorAll('.dot') 


    drawAllSymbols(dots)
    drawSeasonsDots(dots)

    //TODO : Faire en sorte que l'on arrive sur une position déjà zoomée po

    //Création du zoom
    const zoom = d3.zoom()
        .scaleExtent([1.1, 5])
        //-10 -20 pour que les symbols ne sorte pas du svg
        .translateExtent([[-10, 0], [3400, height]])
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
        var newX = e.transform.rescaleX(echelleEpisodes);
        var newY = e.transform.rescaleY(echelleViewers);



        // Appeler le nouveau zoom
        xAxis.call(axeXEpisodes.scale(newX));
        yAxis.call(axeYViewers.scale(newY));

    }





    //TODO: Quand on zoom ça casse les coordonées
    function zoomsSeason(dot, scale = 5) {
        d3.select('svg')
            .transition()
            .call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2 + 100).scale(scale).translate(-dot.getAttribute('cx'), -dot.getAttribute('cy')))

    }

    function resetZoom() {
        d3.select('svg')
            .transition()
            .call(zoom.scaleTo, 1, [0, 0])
    }

    insights.forEach(insight => {
        //change la valeur de r pour les episodes avec insight
        dots[insight.episode-1].setAttribute('r', 10)
        //change l'épaisseur du contour du cercle
        dots[insight.episode-1].setAttribute('stroke-width', SELECTED_STROKE_WIDTH)
    });
    
    document.querySelector('#selection-button').addEventListener('click', (e) => {
        //donne moi la valeur de l'id de l'élément sur lequel j'ai cliqué
        const id = e.target.id
        
        if (id !== 'selection-button') {
 
            switch (id) {
                case 'btn-all':
                    zoomsSeason(dots[35], 1)
                    break;
                case 's1':
                    zoomsSeason(dots[5], 2.5)
                    break;
                case 's2':
                    zoomsSeason(dots[14], 2.5)
                    break;
                case 's3':
                    zoomsSeason(dots[25], 2.5)
                    break;
                case 's4':
                    zoomsSeason(dots[35], 2.5)
                    break;
                case 's5':
                    zoomsSeason(dots[45], 2.0)
                    break;
                case 's6':
                    zoomsSeason(dots[55], 2.0)
                    break;
                case 's7':
                    zoomsSeason(dots[64], 2.0)
                    break;
                case 's8': 
                    zoomsSeason(dots[70], 2.0)
                    break;
        }     
    }
});
    


const selectionButton = document.querySelector('#selection-button')

    selectionButton.addEventListener('click', (e) => {

        if (e.target.classList == 'button-season') {

            //si le bouton a déjà la class active on enlève la class active
            
            //récupère l'élément qui a la class active
            const activeButton = document.querySelector('.active')
            //enlève la class active
            if (activeButton) {
                activeButton.classList.remove('active')
                e.target.classList.add('active')
            }
            else 
            e.target.classList.add('active')
            //ajoute la class active au bouton cliqué
            
        }
    });

    


    //Ajoute le zoom sur le SVG
    initZoom();


})


const margin = {top: 10, right: 40, bottom: 30, left: 40}
const width = 1400 - margin.left - margin.right;


const height = 750 - margin.top - margin.bottom;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  
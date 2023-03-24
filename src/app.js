import {getData} from "./api";
import {select, selectAll} from "d3-selection";
import {scaleBand, scaleLinear, scaleOrdinal} from "d3-scale";
import {axisBottom, axisLeft} from "d3-axis";
import {descending} from "d3-array";
import {transition, interrupt} from "d3-transition";
import data from "d3-selection/src/selection/data";

getData.then(episodes => {

    const POPUP_WIDTH = 300
    const POPUP_HEIGHT = 150

    const svg = select("#graph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    const arrNoEpisode = episodes.map(episode => episode.noEpisodeOverall);

    // Echelle
    const bandScale = scaleBand()
        .domain(arrNoEpisode)
        .range([0, width])
        .paddingInner(0.5);

    const linearScale = scaleLinear()
        .domain([0, 15])
        .range([height, 0])

    //Axes
    const xAxis = (g) => {

        g.attr("transform", `translate(0, ${height})`)
            .call(axisBottom(bandScale).tickFormat(i => episodes[i].noEpisodeOverall))

    }


    const yAxis = (g) => {
        //g.call(axisLeft(linearScale).ticks(episodes.viewers.sort((a,b) => descending(a.viewers, b.viewers))));
        g.call(axisLeft(linearScale).ticks());
    }

    svg
        .selectAll("rect")
        .data(episodes)
        .join(enter => enter.append("rect")
            .attr("x", (d) => bandScale(d.noEpisodeOverall))
            .attr("y", (d) => linearScale(d.viewers))
            .attr("width", bandScale.bandwidth())
            .attr("height", (d) =>  linearScale(0) - linearScale(d.viewers))
            .attr("fill", "royalblue")
            .on("mouseover", (e, d) => {

                const title = d.title
                const synopsis = d.synopsis

                const rect = e.target;

                const yB = +rect.getAttribute("y")
                const xB = +rect.getAttribute("x")

                const lB = +rect.getAttribute("width")


                const popUp = svg.append("rect")

                    //Création de la pop up

                    .classed("bulle", true)
                    .attr("width", POPUP_WIDTH)
                    .attr("height", POPUP_HEIGHT)
                    .attr("x", (xB - POPUP_WIDTH/2) +lB)
                    .attr("y", yB-POPUP_HEIGHT*1.5)
                    .style("fill", "red")
                    .attr("opacity", 1)


                svg.append("text")
                    .classed("textClass", true)
                    .attr("x", popUp.attr("x"))
                    .attr("y", popUp.attr("y")-50)
                    .text(title)



                svg.append("text")
                    .classed("textClass", true)
                    .attr("x", +popUp.attr("x") + popUp.attr('width')/2)
                    .attr("y", popUp.attr("y"))

                    /*.attr("text-anchor", "middle")
                    .attr("dominant-baseline", "central")
                    .attr("textLength", popUp.attr("width")*.8)
                    .attr("legthAdjust", "spacingAndGlyphs")*/
                    .text(synopsis)





                /*                   .transition()
                                   .duration(500)
                                   .attr("opacity", 1)
                                   .interrupt()
               */





            })
            .on("mouseout", () => {
                selectAll("rect.bulle").remove()
                selectAll(".textClass").remove()
            })

)


    svg.append('g').call(yAxis)
    svg.append('g').call(xAxis)





})
const margin = {top: 10, right: 40, bottom: 30, left: 40}
const width = 1200 - margin.left - margin.right;



const height = 600 - margin.top - margin.bottom;



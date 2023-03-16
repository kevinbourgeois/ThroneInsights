import {getData} from "./api";
import {select} from "d3-selection";
import {scaleBand} from "d3-scale";
import {axisBottom} from "d3-axis";

const margin = {top: 10, right: 40, bottom: 30, left: 40}
const width = 450 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;



getData.then(episodes => {


    const svg = select("#graph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("background-color", "red")
        .append("g")

    const arrNoEpisode = episodes.map(episode => episode.noEpisodeOverall);

    //Echelle
    const bandScale = scaleBand()
        .domain([arrNoEpisode])
        .range(0, width)
        .paddingInner(0.1)

    const axisBottom = axisBottom(bandScale)
    const xAxis = svg.append("g").call(axisBottom)
})
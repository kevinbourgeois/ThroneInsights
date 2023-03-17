import {getData} from "./api";
import {select} from "d3-selection";
import {scaleBand, scaleLinear, scaleOrdinal} from "d3-scale";
import {axisBottom, axisLeft} from "d3-axis";
import {descending} from "d3-array";

const margin = {top: 10, right: 40, bottom: 30, left: 40}
const width = 1200 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;



getData.then(episodes => {


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

    console.log(episodes.viewers)

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
                .attr("fill", "royalblue"))

    svg.append('g').call(yAxis)
    svg.append('g').call(xAxis)

})

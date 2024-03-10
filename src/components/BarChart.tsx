import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface BarChartProps {
  data: { name: string; value: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    drawChart();
  }, [data]);

  const drawChart = () => {
    const svg = d3.select(svgRef.current);

    const svgWidth = 600;
    const svgHeight = 400;
    const barPadding = 5;
    const barWidth = svgWidth / data.length;

    svg.attr('width', svgWidth).attr('height', svgHeight);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', d => svgHeight - d.value)
      .attr('height', d => d.value)
      .attr('width', barWidth - barPadding)
      .attr('transform', (d, i) => `translate(${barWidth * i}, 0)`)
      .attr('fill', '#7ED26D');

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(d => d.value)
      .attr('y', (d, i) => svgHeight - d.value - 2)
      .attr('x', (d, i) => barWidth * i)
      .attr('fill', '#FFFFFF');
  };

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
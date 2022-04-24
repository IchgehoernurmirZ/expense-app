import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // the spread operator can pull out each value in the array and pass in them one by one
    const maxExpense = Math.max(...dataPointsValues);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxExpense} label={dataPoint.label}/>)}
        </div>
    )
}

export default Chart;
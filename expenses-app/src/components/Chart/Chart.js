import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ datapoints }) => {
  const dataPointValues = datapoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {datapoints.map((item) => (
        <ChartBar
          value={item.value}
          maxValue={totalMaximum}
          label={item.label}
          key={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;

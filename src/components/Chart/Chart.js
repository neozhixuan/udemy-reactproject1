import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  //Get the max value of all values of the dataPoints
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  //Pulls out all values of the array as separate items [1,2,3,4]
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className = "chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;

import React from "react";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";

const generateChartData = (stockDetails) => {
  const data = {
    labels: stockDetails.map((stock) =>
      dayjs(stock.date).format("DD MMM h:mm a")
    ),
    datasets: [
      {
        label: "# Stock Price ",
        data: stockDetails.map((stock) => stock.value.toLocaleString()),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return data;
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const StockChart = ({ stockDetails }) => (
  <>
    <Line data={generateChartData(stockDetails)} options={options} />
  </>
);

export default React.memo(StockChart);

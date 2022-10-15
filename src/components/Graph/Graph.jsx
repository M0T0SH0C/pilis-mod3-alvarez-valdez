import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Graph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ hourly }) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      yAxes: {
        grid: {
          drawBorder: true,
          color: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          beginAtZero: true,
          color: "white",
        },
      },
      xAxes: {
        grid: {
          drawBorder: true,
          color: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          beginAtZero: true,
          color: "white",
        },
      },
    },
  };
  const labels = hourly.time;
  const data = {
    labels,
    datasets: [
      {
        label: "Variacion de Temperatura",
        data: hourly.temperature,
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      },
    ],
  };

  return (
    <Line options={options} data={data} className="background me-3" />
  );
};

export default Graph;

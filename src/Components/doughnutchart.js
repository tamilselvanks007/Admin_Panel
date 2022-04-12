import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Direct ", "Social ", "Referral"],
  datasets: [
    {
      label: "# of Votes",
      data: [55, 35, 15],
      backgroundColor: ["pink", "skyblue", "#FFD580"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "orange"],
      borderWidth: 1,
    },
  ],
};
function DoughnutChart() {
  return <Doughnut data={data} />;
}

export default DoughnutChart;

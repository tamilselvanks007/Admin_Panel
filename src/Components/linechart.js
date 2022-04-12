import React from "react";
import { Line } from "react-chartjs-2";
import faker from "faker";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Earnings",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      borderColor: "grey",
      backgroundColor: "black",
    },
  ],
  borderWidth: 2,
};

export default function Linechart() {
  return <Line data={data} />;
}

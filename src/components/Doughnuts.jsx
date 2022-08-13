import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Data = {
  labels: ["Angel", "Seed", "Presale", "IDO", "Marketing", "Team"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: [
        "#3399ff",
        "#2d89e5",
        "#287acc",
        "#236bb2",
        "#1e5b99",
        "194c7f",
      ],
      hoverBackgroundColor: [
        "#6e0da6",
        "#6e0da6",
        "#6e0da6",
        "#6e0da6",
        "#6e0da6",
      ],
      data: [2.5, 5, 7.5, 14, 7.5, 0],
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnuts = () => {
  return (
    <div>
      <Doughnut
        data={Data}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
export default Doughnuts;

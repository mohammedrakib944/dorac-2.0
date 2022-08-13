import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Data = {
  labels: [
    "Advisors",
    "Initial LP",
    "Prizes",
    "IDO",
    "Presale",
    "Treasury",
    "Team",
    "Angel",
    "Seed",
  ],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: [
        "#A6B1B3",
        "#809CA0",
        "#5D848B",
        "#376670",
        "#0F3F49",
        "#523E85",
        "#70639B",
        "#8F83A9",
        "#ADA6B8",
      ],
      hoverBackgroundColor: [
        "#A6B1B3",
        "#809CA0",
        "#5D848B",
        "#376670",
        "#0F3F49",
        "#523E85",
        "#70639B",
        "#8F83A9",
        "#ADA6B8",
      ],
      data: [1.0, 2.7, 6.0, 10.0, 10.4, 20.0, 16.6, 8.3, 8.3, 16.7],
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

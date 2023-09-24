import React from "react";
import { BarChart } from "@tremor/react";

const chartData = [
  {
    name: "Nunca",
    Porcentagem: 47,
  },
  {
    name: "Não tem certeza",
    Porcentagem: 37,
  },
  {
    name: "Sim",
    Porcentagem:16,
  },
];

const dataFormatter = (number: number) => {
  return `${number}%`;
};

const BarGraphic: React.FC = () => {
  return (
    <BarChart
      className="h-80 mt-8"
      data={chartData}
      index="name"
      categories={["Porcentagem"]}
      showLegend={false}
      colors={["yellow", "green", "orange"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  );
};

export default BarGraphic;

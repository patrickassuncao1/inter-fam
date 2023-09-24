import { DonutChart } from "@tremor/react";
import React from "react";

const information = [
  {
    name: "Identificaram",
    percentage: 92,
  },
  {
    name: "Não Indetificaram",
    percentage: 8,
  },
];

const valueFormatter = (number: number) => {
  return `${number}%`;
};

const DonutGraphic: React.FC = () => {
  return (
    <DonutChart
      className="h-64"
      data={information}
      category="percentage"
      index="name" 
      valueFormatter={valueFormatter}
      colors={["green", "blue"]}
    />
  );
};

export default DonutGraphic;

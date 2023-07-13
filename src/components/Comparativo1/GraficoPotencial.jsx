import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const GraficoPotencial = () => {
  return (
    <>
      <h3>Potencial de Faturamento</h3>
      <div className="chart">
        <Chart
          type="bar"
          width={600}
          height={600}
          series={[
            {
              name: "Company1",
              data: [100, 200, 232, 132, 422],
            },
          ]}
          options={{}}
        ></Chart>
      </div>
    </>
  );
};

export default GraficoPotencial;

import React, { useState } from "react";
import FormCalcMetragem from "./FormCalcMetragem";

const CalcMetragem = () => {
  return (
    <div>
      <header>
        <h2>Comparativo 1</h2>
        <span>Você vs. Mercado</span>
      </header>
      <FormCalcMetragem />
    </div>
  );
};

export default CalcMetragem;

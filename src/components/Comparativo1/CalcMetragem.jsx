import React, { useState } from "react";
import FormCalcMetragem from "./FormCalcMetragem";

const CalcMetragem = () => {
  const [meters, setMeters] = useState("");
  const [invoicing, setInvoicing] = useState("");

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

import React, { useState, useEffect } from "react";

const FormCalcMetragem = () => {
  const [meters, setMeters] = useState(0);
  const [invoicing, setInvoicing] = useState(0);

  const setMetersLocalStorage = (event) => {
    event.preventDefault();
    localStorage.setItem("metragem", meters.toString());
    localStorage.setItem("faturamento", invoicing.toString());
  };

  useEffect(() => {
    const calcFaturamento = () => {
      const metragem = localStorage.getItem("metragem");
      const faturamento = localStorage.getItem("faturamento");
    };
  }, []);

  return (
    <div className="dark:text-white">
      <form onSubmit={setMetersLocalStorage}>
        <div>
          <label htmlFor="meters">Metragem (em m2)</label>
          <input
            type="text"
            id="meters"
            value={meters}
            onChange={(event) => setMeters(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="invoicing">Faturamento (aprox.)</label>
          <input
            type="text"
            id="invoicing"
            value={invoicing}
            onChange={(event) => setInvoicing(event.target.value)}
          />
        </div>
        <button>Calcular</button>
      </form>

      {/* Aqui vão aparecer os resultados */}
      <div>
        <div>
          <p>Metragem média</p>
          <span>{localStorage.getItem("metragem")}</span>
        </div>
        <div>
          <p>Faturamento médio (aprox)</p>
          <span>{localStorage.getItem("faturamento")}</span>
        </div>
      </div>
    </div>
  );
};

export default FormCalcMetragem;

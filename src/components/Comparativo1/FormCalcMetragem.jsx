import React, { useState, useEffect } from "react";

const FormCalcMetragem = () => {
  const [metragem, setMetragem] = useState(" ");
  const [faturamento, setFaturamento] = useState(" ");
  const [valorMedio, setValorMedio] = useState(0);
  const [potencial, setPotencial] = useState("");
  const [minimo, setMinimo] = useState(null);
  const [maximo, setMaximo] = useState(null);
  const [categoria, setCategoria] = useState(null);

  const [totalFaturamento, setTotalFaturamento] = useState(0);
  const [minimoFaturamento, setMinimoFaturamento] = useState(0);
  const [maximoFaturamento, setMaximoFaturamento] = useState(0);

  const setDataLocalStorage = (event) => {
    0;
    event.preventDefault();
    localStorage.setItem("metragem", metragem.toString());
    localStorage.setItem("faturamento", faturamento.toString());
    calcFaturamento();
  };

  const calcFaturamento = () => {
    const metragem = localStorage.getItem("metragem");
    const faturamento = localStorage.getItem("faturamento");

    if (metragem >= 50 || metragem <= 50 + 10 - 0.1) {
      setPotencial("c");
      localStorage.setItem("potencial", potencial);
      setCategoria(1);
      localStorage.setItem("categoria", categoria.toString());
    }

    if (metragem >= 50 || metragem <= 90 + 10 - 0.1) {
      setValorMedio(2000);
      localStorage.setItem("valor_medio", valorMedio.toString());
    }
  };

  return (
    <div className="dark:text-white">
      <form onSubmit={setDataLocalStorage}>
        <div>
          <label htmlFor="meters">Metragem (em m2)</label>
          <input
            type="text"
            id="meters"
            value={metragem}
            onChange={(event) => setMetragem(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="invoicing">Faturamento (aprox.)</label>
          <input
            type="text"
            id="invoicing"
            value={faturamento}
            onChange={(event) => setFaturamento(event.target.value)}
          />
        </div>
        <button>Calcular</button>
      </form>

      {/* Aqui vão aparecer os resultados */}
      <div>
        <div>
          <p>Metragem média</p>
          <span>{metragem}</span>
        </div>
        <div>
          <p>Faturamento médio (aprox)</p>
          <span>{metragem * faturamento}</span>
        </div>
      </div>
    </div>
  );
};

export default FormCalcMetragem;

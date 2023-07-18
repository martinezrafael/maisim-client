import React, { useState } from "react";
import ApexCharts from "apexcharts";


const CalcMetragem = () => {
  //valores fornecidos pelo usuário
  const [metragemComercial, setMetragemComercial] = useState("");
  const [faturamentoUsuario, setFaturamentoUsuario] = useState("");

  //valores calculados
  const [faturamentoIdeal, setFaturamentoIdeal] = useState(undefined);
  const [potencialFaturamento, setpotencialFaturamento] = useState(undefined);

  const calcValorMedioPorM2 = (metragem) => {
    let valorMedio = 0;

    if (metragem > 0 && metragem <= 99.9) {
      valorMedio = 2000;
    } else if (metragem >= 100 && metragem <= 149.9) {
      valorMedio = 3000;
    } else if (metragem >= 150 && metragem <= 209.9) {
      valorMedio = 4000;
    } else if (metragem >= 210 && metragem <= 259.9) {
      valorMedio = 5000;
    } else {
      valorMedio = 6000;
    }

    return valorMedio;
  };

  const calcFaturamentoIdeal = () => {
    const metragemInformada = metragemComercial;
    const valorMedioPorM2 = calcValorMedioPorM2(metragemInformada);

    const faturamentoIdeal = metragemInformada * valorMedioPorM2;

    return faturamentoIdeal;
  };

  const calcPotencialFaturamento = () => {
    const faturamentoInformado = faturamentoUsuario;
    const faturamentoIdeal = calcFaturamentoIdeal();

    let potencial = Math.round((faturamentoInformado / faturamentoIdeal) * 100);
    return potencial;
  };

  const options = {
    series: potencialFaturamento,
    chart: {
    type: 'radialBar',
    offsetY: -20,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: -2,
          fontSize: '22px'
        }
      }
    }
  },
  grid: {
    padding: {
      top: -10
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    },
  },
  labels: ['Average Results'],
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let faturamentoIdeal = calcFaturamentoIdeal();
    setFaturamentoIdeal(faturamentoIdeal);

    let faturamentoPotencial = calcPotencialFaturamento();
    setpotencialFaturamento(faturamentoPotencial);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="metragem">Insira o seu m2</label>{" "}
          <input
            type="text"
            id="metragem"
            value={metragemComercial}
            onChange={(event) =>
              setMetragemComercial(Number(event.target.value))
            }
          />
        </div>
        <div>
          <label htmlFor="faturamento">Insira o seu faturamento</label>{" "}
          <input
            type="text"
            id="faturamento"
            value={faturamentoUsuario}
            onChange={(event) =>
              setFaturamentoUsuario(Number(event.target.value))
            }
          />
        </div>
        <button>Calcular</button>
      </form>
      <div>
        <div>
          <div>
            <h3>Metragem média (em m2)</h3>
            {metragemComercial !== undefined ? (
              <span>{metragemComercial}</span>
            ) : undefined}
          </div>
          <div>
            <h3>Faturamento médio (aprox)</h3>
            {faturamentoIdeal !== undefined ? (
              <span>R${faturamentoIdeal}</span>
            ) : undefined}
          </div>
        </div>
        <div>
          <h3>Potencial de Faturamento</h3>
    
          {potencialFaturamento !== undefined ? (
            <span>{potencialFaturamento}%</span>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default CalcMetragem;

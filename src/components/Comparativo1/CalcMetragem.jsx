import React, {useState} from 'react'

const CalcMetragem = () => {
  //valores fornecidos pelo usuário
  const [metragemComercial, setMetragemComercial] = useState(' ');
  const [faturamentoUsuario, setFaturamentoUsuario] = useState(' ');

  //valores calculados
  const [valorMedioPorM2, setValorMedioPorM2] = useState(' ');
  const [potencialRegiao, setPotencialRegiao] = useState('');
  const [categoria, setCategoria] = useState(' ');
  const [valorTotalDeFaturamento, setValorTotalDeFaturamento] = useState(' ');
  const [valorMinimoDeFaturamento, setvalorMinimoDeFaturamento] = useState(' ');
  const [valorMaximoDeFaturamento, setvalorMaximoDeFaturamento] = useState(' ');

  const calcValorMedioPorM2 = (metragem) => {
    if(metragem >= 50 || metragem <= 99.9){
      setValorMedioPorM2(2000);
    }

    if(metragem >= 100 || metragem <= 149.9){
      setValorMedioPorM2(3000);
    }

    if(metragem >= 150 || metragem <= 209.9){
      setValorMedioPorM2(4000);
    }

    if(metragem >= 210 || metragem <= 259.9){
      setValorMedioPorM2(5000);
    }

    if(metragem >= 260 || metragem <= 300){
      setValorMedioPorM2(6000);
    }
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    calcValorMedioPorM2(metragemComercial);
    console.log(metragemComercial);
    console.log(valorMedioPorM2);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="metragem">Insira o seu m2</label> {' '}
          <input type="text" id='metragem' value={metragemComercial} onChange={(event)=> setMetragemComercial(Number(event.target.value))}/>
        </div>
        <div>
          <label htmlFor="faturamento">Insira o seu faturamento</label> {' '}
          <input type="text" id='faturamento' value={faturamentoUsuario} onChange={(event)=>setFaturamentoUsuario(Number(event.target.value))}/>
        </div>
       <button>Calcular</button>
      </form>
      <div>
        <h3>Metragem Média (em m2)</h3>
        <span>{valorMedioPorM2}</span>
      </div>
    </div>
  )
}

export default CalcMetragem
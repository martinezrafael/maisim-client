import React from 'react';
import '../src/index.css';
import Top10List from './components/Comparativo2/Top10List';
import Header from './components/global/Header';
import CalcMetragem from './components/Comparativo1/CalcMetragem';


const App = () => {
  return (
    <>
      <Header />
      <CalcMetragem />
      <Top10List />
    </>
  )
}

export default App
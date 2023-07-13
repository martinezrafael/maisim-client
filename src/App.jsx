import React from 'react';
import '../src/index.css';
import Top10List from './components/Comparativo2/Top10List';

import CalcMetragem from './components/Comparativo1/CalcMetragem';


const App = () => {
  return (
    <>
      <CalcMetragem />
      <Top10List />
    </>
  )
}

export default App
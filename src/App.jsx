import React from "react";
import "../src/index.css";
import Header from "./components/global/Header";
import CalcMetragem from "./components/Comparativo1/CalcMetragem";
import Top10List from "./components/Comparativo2/Top10List";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container m-auto">
        <CalcMetragem />
        <Top10List />
      </div>
    </div>
  );
};

export default App;

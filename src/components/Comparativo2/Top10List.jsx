import React from "react";
import dataGenerico from "../../../genericos.json";

const Top10List = () => {
  return (
    <div className="bg-purple-300 dark:bg-purple-400 dark:text-white">
      <div></div>
      <header>
        <h3>Genérico</h3>
      </header>
      <table>
        <thead>
          <th>Nome</th>
          <th>Laboratório</th>
          <th>Share %</th>
        </thead>
        <tbody>
          {dataGenerico.map((item, index) => (
            <tr key={index}>
              <td>{item.PRODUTO}</td>
              <td>{item.LABORATORIO}</td>
              <td>{item.FCC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top10List;

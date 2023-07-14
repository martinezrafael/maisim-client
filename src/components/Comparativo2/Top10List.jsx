import React, { useState,useEffect } from "react";
import axios, { AxiosHeaders } from 'axios';



const Top10List = () => {
  const [brickList, setBrickList] = useState([]);

  useEffect(() => {
    async function getBrick() {
  
      try {
        const response = await axios.get('https://apiudf.azurewebsites.net/top/100');
        setBrickList(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getBrick();
    
  },[])

  return (
    <div>
      <table >
        <thead>
          <th>Nome</th>
          <th>Laboratório</th>
          <th>Share</th>
        </thead>
        <tbody className="brickTable">
          {
            brickList.map((props, index) =>(
              <tr key={index} className={`item-${index+=1}`}>
                <td>{props.PRODUTO}</td>
                <td>{props.LABORATORIO}</td>
                <td>{props.UNIDADES}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Top10List;

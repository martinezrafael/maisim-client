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
    <div 
    className="bg-gradient-to-b from-purple-500 to-purple-600 w-full h-full max-w-3xl text-white m-auto">
      <table>
        <thead className="font-medium">
          <th>Nome</th>
          <th>Laboratório</th>
          <th>Share</th>
        </thead>
        <tbody className="brickTable">
          {
            brickList.map((props, index) =>(
              <tr key={index} className={`item-${index+=1}`}>
                <td className="p-4 text-center">{props.PRODUTO}</td>
                <td className="p-4 text-center">{props.LABORATORIO}</td>
                <td className="p-4 text-center">{props.UNIDADES}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Top10List;

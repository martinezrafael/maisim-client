import React, { useState,useEffect } from "react";
import axios from 'axios';



const Top10List = () => {
  const [brickList, setBrickList] = useState([]);
  const [brickUser, setBrickUser] = useState(100);


  useEffect(() => {

    async function getBrick() {
  
      try {
        const response = await axios.get(`https://apiudf.azurewebsites.net/top/${brickUser}`);
        setBrickList(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    //calcular o share
    //(qtde / total de quantidades considerando o brick inteiro da região);
    
    //Define qual é o brick de acordo com o cep informado
    async function setBrick(cep) {
      //Definir intervalos
      //intervalo_1 = 10000000 a 1044999

      //ceps iniciais terminam com 0
      //ceps finais terminal 9

      if (cep === 1){}
    }


    getBrick();
    setBrick();
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

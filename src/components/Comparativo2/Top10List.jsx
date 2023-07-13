import React, { useState,useEffect } from "react";
import axios from 'axios';


const Top10List = () => {
  const [brickList, setBrickList] = useState([]);

  useEffect(() => {
    async function getBrick() {
      try {
        const response = await axios.get('https://apiudf.azurewebsites.net/top/100/GENERICO');
        setBrickList(response);
      } catch (error) {
        console.error(error);
      }
    }
    getBrick();
  },[])

  return (
    <div className="bg-purple-300 dark:bg-purple-400 dark:text-white">
      {brickList.map((props) => {
        <span>{props.EAN}</span>
      })}
    </div>
  );
};

export default Top10List;

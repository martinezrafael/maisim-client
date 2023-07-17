import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAccessToken } from "../../../api/api.lw";
import { useParams } from "react-router-dom";
import Top10List from "../Comparativo2/Top10List";

const User = () => {
  const [userName, setUserName] = useState("");
  const [cep, setCep] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const baseUrl = import.meta.env.VITE_API_URL;
      try {
        const apiEndpoint = `${baseUrl}/admin/api/v2/users/${userId}`;
        const accessToken = await getAccessToken();
        const id = import.meta.env.VITE_CLIENT_ID;

        const response = await axios.get(apiEndpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Lw-Client": id,
          },
        });
        
        const cepToNumber = Number(response.data.billing_info.bf_postalcode.replace('-', ''));
        setUserName(response.data.username);
        setCep(cepToNumber);
      } catch (error) {
        console.error("Erro na solicitação para a API externa:", error);
      }
    }
    fetchUser();
  }, [userId]);

  return (
    <div className="dark:text-white font-poppins">
      <h3>{userName}</h3>
      <p>{cep}</p>
      <Top10List />
    </div>
  );
};

export default User;

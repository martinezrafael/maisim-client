import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAccessToken } from "../../../api/api.lw";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);
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
        setUser(response.data);
      } catch (error) {
        console.error("Erro na solicitação para a API externa:", error);
      }
    }
    fetchUser();
  },[userId]);

  return <div>{user ? <p>{user.username}</p>: <p>Carregando...</p>}</div>;
};

export default User;

import React, { useState, useEffect } from "react";
import axios from "axios";


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const id = import.meta.env.VITE_CLIENT_ID;
    const secret = import.meta.env.VITE_CLIENT_SECRET;
  
    async function getAccessToken() {
      const url = `${baseUrl}/admin/api/oauth2/access_token`;
      const clientId = id;
      const clientSecret = secret;

      const requestBody = {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
      };

      try {
        const response = await axios.post(url, requestBody, {
          headers: {
            "Lw-Client": clientId,
          },
        });
        return response.data.tokenData.access_token;
      } catch (error) {
        console.error("Erro ao obter o token de acesso:", error);
        throw error;
      }
    }

    async function fetchData() {
      try {
        const accessToken = await getAccessToken();
        const apiEndpoint = `${baseUrl}/v2/users`;

        const response = await axios.get(apiEndpoint, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        });
        setUsers(response.data)
      } catch (error) {
        console.error("Erro na solicitação para a API externa:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>id:{user.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

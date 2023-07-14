import React, { useState, useEffect } from "react";
import axios from "axios";


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const baseUrl = "https://universidadedafarmacia.com.br/admin/api/oauth2/";
    const id = "63cfd92085cf5d2cb507c4b2";
    const secret = "CCB9lhbsnpQ5W9aOOKNf4l6N5J4LaNG6O8cfq8E8Om6FQA1VaU";

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
        console.log(response.data.access_token);
        return response.data.access_token;
      } catch (error) {
        console.error("Erro ao obter o token de acesso:", error);
        throw error;
      }
    }

    async function fetchData() {
      try {
        const accessToken = await getAccessToken();
        const apiEndpoint = `${import.meta.env.VITE_API_URL}/v2/users`;

        const response = await axios.get(apiEndpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Lw-Client": "your_client_id",
          },
        });
        setUsers(response.data)
      } catch (error) {
        console.error("Erro na solicitação para a API externa:", error);
      }
    }

    fetchData();
  }, [users]);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>id: {user.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

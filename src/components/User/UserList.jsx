import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAccessToken } from "../../../api/api.lw";


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL;

    async function fetchData() {
      try {
        const accessToken = await getAccessToken();
        const apiEndpoint = `${baseUrl}/admin/api/v2/users`;
        const id = import.meta.env.VITE_CLIENT_ID;

        const response = await axios.get(apiEndpoint, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Lw-Client": id,
          },
        });
        setUsers(response.data.data)
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
            <p>{user.username.toLowerCase()}</p>
            <p>{user.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

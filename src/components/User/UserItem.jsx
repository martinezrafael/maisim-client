import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getAccessToken } from '../../../api/api.lw';

const UserItem = () => {
  const [name, setName] = useState('Rafael');
  const [cnpj, setCnpj] = useState(33470512892);

    //id do usuário sendo extraido da url
    const { id } = useParams();

  //Aqui busca o usuário
  useEffect(() => {
    //url base da api
    const baseUrl = import.meta.env.VITE_API_URL;
  
    //função que busca o usuário pelo id
    const getUserById = async () => {
      try {
        //Gera o token de acesso;
        const token = await getAccessToken();
        
        //Endpoint para buscar o usuário
        const endpoint = `${baseUrl}/admin/api/v2/users/${id}`

        //client id para acessar a api
        const clientId = import.meta.env.VITE_CLIENT_ID;

        //requisição
        const response = await axios.get(
          endpoint,
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Lw-Client": clientId,
            }
          }
        );

        //Atualizando os estados com os valores retornados da API
        // const userName = response.data.username;
        // const userCnpj = response.data.cnpj;
        // setName(userName);
        // setCnpj(userCnpj);
        console.log(response.data);
      } catch (error) {
        console.error(`Erro na solicitação: ${error}`)
      }
    }

    getUserById();

  },[])

  return (
    <div className='userItem'>
      <h3 className='userItem__userName'>{name}</h3>
      <span className='userItem__cnpj'>{cnpj}</span>
    </div>
  )
}

export default UserItem
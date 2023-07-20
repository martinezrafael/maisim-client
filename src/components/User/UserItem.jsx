import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { getAccessToken } from '../../../api/api.lw';

const UserItem = ({id}) => {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState(''); 

  const userId = '645d26578b32d0158402b142';

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
        const endpoint = `${baseUrl}/admin/api/v2/users/${userId}`

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
        setName(response.data.username);
        setCnpj(response.data.billing_info.bf_postalcode);
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
import axios from 'axios';

export const getTop10 = async (cep) => {
  const baseUrl = import.meta.env.VITE_API_IQVIA_URL;

  const url = `${baseUrl}/top/${cep}`;
}
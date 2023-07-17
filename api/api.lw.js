import axios from "axios";

export const getAccessToken = async () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const id = import.meta.env.VITE_CLIENT_ID;
  const secret = import.meta.env.VITE_CLIENT_SECRET;

  const url = `${baseUrl}/admin/api/oauth2/access_token`;

  const requestBody = {
    client_id: id,
    client_secret: secret,
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        "Lw-Client": id,
      },
    });
    return response.data.tokenData.access_token;
  } catch (error) {
    console.error("Erro ao obter o token de acesso:", error);
    throw error;
  }
};

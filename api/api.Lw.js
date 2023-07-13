import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
const id = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

// Função para autenticar usando o grant_type 'client_credentials'
async function autenticarCliente() {
  try {
    const endpoint = `${baseUrl}/admin/api/oauth2/access_token`; // Substitua {SCHOOLHOMEPAGE} pelo domínio da sua escola
    const clientId = id;
    const clientSecret = secret;

    const response = await axios.post(endpoint, {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
    });

    // Extrair o token de acesso do response
    const accessToken = response.data.tokenData.access_token;

    // Retornar o token de acesso
    return accessToken;
  } catch (error) {
    console.error("Erro ao autenticar cliente:", error.message);
    throw error;
  }
}

// Função para autenticar usando o grant_type 'password'
// async function autenticarUsuario(username, password) {
//   try {
//     const endpoint = "https://{SCHOOLHOMEPAGE}/admin/api/oauth2/access_token"; // Substitua {SCHOOLHOMEPAGE} pelo domínio da sua escola
//     const clientId = "seu_client_id";
//     const clientSecret = "seu_client_secret";

//     const response = await axios.post(endpoint, {
//       client_id: clientId,
//       client_secret: clientSecret,
//       grant_type: "password",
//       email: username,
//       password: password,
//     });

//     // Extrair o token de acesso do response
//     const accessToken = response.data.tokenData.access_token;

//     // Retornar o token de acesso
//     return accessToken;
//   } catch (error) {
//     console.error("Erro ao autenticar usuário:", error.message);
//     throw error;
//   }
// }

// Exemplo de uso da função de autenticação
async function exemploAutenticacao() {
  try {
    // Autenticar como cliente
    const tokenCliente = await autenticarCliente();
    console.log("Token de acesso do cliente:", tokenCliente);

    // Autenticar como usuário
    const tokenUsuario = await autenticarUsuario("seu_email", "sua_senha");
    console.log("Token de acesso do usuário:", tokenUsuario);
  } catch (error) {
    console.error("Erro durante a autenticação:", error.message);
  }
}

// Chamar a função de exemplo
exemploAutenticacao();

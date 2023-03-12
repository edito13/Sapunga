import axios, { AxiosRequestConfig } from "axios";

interface dataI {
  name?: string;
  email: string;
  password: string;
}

export const BaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sapunga-back-end.vercel.app";

const api = {
  async GetUsers() {
    const response = await axios(`${BaseUrl}/selecionar_usuarios`);
    return response.data;
  },
  async VerifyLogin(data: dataI) {
    const response = await axios.post(`${BaseUrl}/verificar_login`, data);
    return response.data;
  },
  async DeleteUser(data: AxiosRequestConfig) {
    const response = await axios.delete(`${BaseUrl}/deletar_usuario`, data);
    return response.data;
  },
  async GeProducts() {
    const response = await axios(`${BaseUrl}/selecionar_produtos`);
    return response.data;
  },
};

export default api;

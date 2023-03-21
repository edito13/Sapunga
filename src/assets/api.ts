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
  async SelectUsers() {
    const response = await axios(`${BaseUrl}/user/selectAll`);
    return response.data;
  },
  async SelectUser({ id, token }: { id: string; token: string }) {
    const response = await axios(`${BaseUrl}/user/selectOne/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async CheckLogin(data: dataI) {
    const response = await axios.post(`${BaseUrl}/user/checkLogin`, data);
    return response.data;
  },
  async DeleteUser(data: AxiosRequestConfig) {
    const response = await axios.delete(`${BaseUrl}/user/delete`, data);
    return response.data;
  },
  async SelectProducts() {
    const response = await axios(`${BaseUrl}/product/selectAll`);
    return response.data;
  },
  async SelectProduct({ id }: { id: string }) {
    const response = await axios(`${BaseUrl}/product/selectOne/${id}`);
    return response.data;
  },
};

export default api;

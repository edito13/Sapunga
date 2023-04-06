import axios, { AxiosRequestConfig } from "axios";

interface dataI {
  name?: string;
  email: string;
  password: string;
}

interface orderDataI {
  token: string;
  productID: string;
  quantity: number;
}

interface authDataI {
  id: string;
  token: string;
}

export const BaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sapunga-back-end.vercel.app";

const api = {
  async UploadFile(data: FormData) {
    const response = await axios.post(`${BaseUrl}/uploads`, data);
    return response.data;
  },
  async CheckLogin(data: dataI) {
    const response = await axios.post(`${BaseUrl}/user/checkLogin`, data);
    return response.data;
  },
  async OrderProduct({ token, productID, quantity }: orderDataI) {
    const response = await axios.post(
      `${BaseUrl}/order/orderProduct`,
      { productID, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  async SelectUsers() {
    const response = await axios(`${BaseUrl}/user/selectAll`);
    return response.data;
  },
  async SelectUser({ id, token }: authDataI) {
    const response = await axios(`${BaseUrl}/user/selectOne/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async SelectProducts() {
    const response = await axios(`${BaseUrl}/product/selectAll`);
    return response.data;
  },
  async SelectProduct(id: string) {
    const response = await axios(`${BaseUrl}/product/selectOne/${id}`);
    return response.data;
  },
  async SelectOrders() {
    const response = await axios(`${BaseUrl}/order/selectAll`);
    return response.data;
  },
  async SelectOrdersUser(token: string) {
    const response = await axios(`${BaseUrl}/order/selectOrdersUser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async SelectFavourites(token: string) {
    const response = await axios(`${BaseUrl}/react/selectUserReacts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async SelectCategories() {
    const response = await axios(`${BaseUrl}/category/`);
    return response.data;
  },
  async DeleteUser(data: AxiosRequestConfig) {
    const response = await axios.delete(`${BaseUrl}/user/delete`, data);
    return response.data;
  },
  async DeleteOrder({ id, token }: authDataI) {
    const response = await axios.delete(`${BaseUrl}/order/delete`, {
      data: { id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async DeleteFavourite({ id, token }: authDataI) {
    const response = await axios.delete(`${BaseUrl}/react/unReact`, {
      data: { id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};

export default api;

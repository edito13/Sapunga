import axios, { AxiosRequestConfig } from "axios";

interface UserDataI {
  name?: string;
  email: string;
  password?: string;
}

interface SendMessageI {
  message: string;
  token: string;
}

interface ProductDataI {
  urlPhoto: string;
  name: string;
  price: number;
  describe: string;
  categoryID: string;
}

interface AdminDataI {
  name: string;
  code: string;
}

interface orderDataI {
  token: string;
  productID: string;
  quantity: number;
}

interface FavouriteDataI {
  token: string;
  productID: string;
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
  async SendMessage({ message, token }: SendMessageI) {
    const response = await axios.post(
      `${BaseUrl}/sendMessage`,
      { message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  async CheckLogin(data: UserDataI) {
    const response = await axios.post(`${BaseUrl}/user/checkLogin`, data);
    return response.data;
  },
  async CheckLoginGoogle(email: string) {
    const response = await axios.post(`${BaseUrl}/user/checkLoginGoogle`, {
      email,
    });
    return response.data;
  },
  async CheckLoginAdmin(data: AdminDataI) {
    const response = await axios.post(`${BaseUrl}/admin/checkLogin`, data);
    return response.data;
  },
  async OrderProduct({ token, productID, quantity }: orderDataI) {
    const response = await axios.post(
      `${BaseUrl}/order/`,
      { productID, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  async UpdateOrderProduct({
    token,
    id,
    quantity,
  }: {
    token: string;
    id: string;
    quantity: number;
  }) {
    const response = await axios.put(
      `${BaseUrl}/order/`,
      { id, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  async CreateProduct(data: ProductDataI) {
    const response = await axios.post(`${BaseUrl}/product/`, data);
    return response.data;
  },
  async CreateAcount(data: UserDataI) {
    const response = await axios.post(`${BaseUrl}/user/`, data);
    return response.data;
  },
  async FavouriteProduct({ token, productID }: FavouriteDataI) {
    const response = await axios.post(
      `${BaseUrl}/favourite/`,
      { productID },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  async SelectUsers() {
    const response = await axios(`${BaseUrl}/user/`);
    return response.data;
  },
  async SelectUser({ id, token }: authDataI) {
    const response = await axios(`${BaseUrl}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async SelectProducts() {
    const response = await axios(`${BaseUrl}/product/`);
    return response.data;
  },
  async SelectProductsCategory() {
    const response = await axios(`${BaseUrl}/product/all`);
    return response.data;
  },
  async SelectProduct(id: string) {
    const response = await axios(`${BaseUrl}/product/${id}`);
    return response.data;
  },
  async SelectOrders() {
    const response = await axios(`${BaseUrl}/order/`);
    return response.data;
  },
  async SelectOrdersUser(token: string) {
    const response = await axios(`${BaseUrl}/order/ordersUser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async SelectFavourites(token: string) {
    const response = await axios(`${BaseUrl}/favourite/userFavourites`, {
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
    const response = await axios.delete(`${BaseUrl}/user/`, data);
    return response.data;
  },
  async DeleteOrder({ id, token }: authDataI) {
    const response = await axios.delete(`${BaseUrl}/order/`, {
      data: { id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async DeleteProduct(id: string) {
    const response = await axios.delete(`${BaseUrl}/product/`, {
      data: { id },
    });
    return response.data;
  },
  async DeleteFavourite({ id, token }: authDataI) {
    const response = await axios.delete(`${BaseUrl}/favourite/`, {
      data: { id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};

export default api;

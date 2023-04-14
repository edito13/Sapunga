import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateOrdersI, OrdersData } from "../../interfaces";

const InitialState: InitialStateOrdersI = {
  orders: localStorage.orders ? JSON.parse(localStorage.orders) : [],
  ordersUser: localStorage.ordersUser
    ? JSON.parse(localStorage.ordersUser)
    : [],
};

const Orders = createSlice({
  name: "Orders",
  initialState: InitialState,
  reducers: {
    addOrders(state, { payload }: PayloadAction<OrdersData[]>) {
      return { ...state, orders: payload };
    },
    addOrdersUser(state, { payload }: PayloadAction<OrdersData[]>) {
      return { ...state, ordersUser: payload };
    },
    addNewOrderUser(state, { payload }: PayloadAction<OrdersData>) {
      return { ...state, ordersUser: [...state.ordersUser, payload] };
    },
  },
});

export default Orders.reducer;

export const { addOrders, addOrdersUser, addNewOrderUser } = Orders.actions;

export const selectAllOrders = (state: any) =>
  state.orders.orders as OrdersData[];
export const selectOrdersUser = (state: any) =>
  state.orders.ordersUser as OrdersData[];

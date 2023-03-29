import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateProductsI, ProductsData } from "../../interfaces";

const InitialState: InitialStateProductsI = {
  products: localStorage.products ? JSON.parse(localStorage.products) : [],
};

const Products = createSlice({
  name: "Products",
  initialState: InitialState,
  reducers: {
    addProducts(state, { payload }: PayloadAction<ProductsData[]>) {
      return { ...state, products: payload };
    },
  },
});

export default Products.reducer;

export const { addProducts } = Products.actions;

export const selectAllProducts = (state: any) =>
  state.products.products as ProductsData[];

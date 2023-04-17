import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialStateProductsI,
  ProductsCategory,
  ProductsData,
} from "../../interfaces";

const InitialState: InitialStateProductsI = {
  products: localStorage.products ? JSON.parse(localStorage.products) : [],
  productsCategory: localStorage.productsCategory
    ? JSON.parse(localStorage.productsCategory)
    : [],
};

const Products = createSlice({
  name: "Products",
  initialState: InitialState,
  reducers: {
    addProducts(state, { payload }: PayloadAction<ProductsData[]>) {
      return { ...state, products: payload };
    },
    addProductsCategory(state, { payload }: PayloadAction<ProductsCategory[]>) {
      return { ...state, productsCategory: payload };
    },
  },
});

export default Products.reducer;

export const { addProducts, addProductsCategory } = Products.actions;

export const selectAllProducts = (state: any) =>
  state.products.products as ProductsData[];

export const selectAllProductsCategory = (state: any) =>
  state.products.productsCategory as ProductsCategory[];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesData, InitialStateCategoriesI } from "../../interfaces";

const InitialState: InitialStateCategoriesI = {
  categories: localStorage.categories
    ? JSON.parse(localStorage.categories)
    : [],
};

const Categories = createSlice({
  name: "Categories",
  initialState: InitialState,
  reducers: {
    addCategories(state, { payload }: PayloadAction<CategoriesData[]>) {
      return { ...state, categories: payload };
    },
  },
});

export default Categories.reducer;

export const { addCategories } = Categories.actions;

export const SelectCategories = (state: any) =>
  state.categories.categories as CategoriesData[];

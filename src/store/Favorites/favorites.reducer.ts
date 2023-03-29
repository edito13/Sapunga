import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavouritesData, InitialStateFavouritesI } from "../../interfaces";

const InitialState: InitialStateFavouritesI = {
  favourites: localStorage.favourites
    ? JSON.parse(localStorage.favourites)
    : [],
};

const Favourites = createSlice({
  name: "Favourites",
  initialState: InitialState,
  reducers: {
    addFavourites(state, { payload }: PayloadAction<FavouritesData[]>) {
      return { ...state, favourites: payload };
    },
    addNewFavourite(state, { payload }: PayloadAction<FavouritesData>) {
      return { ...state, favorites: [...state.favourites, payload] };
    },
  },
});

export default Favourites.reducer;

export const { addFavourites, addNewFavourite } = Favourites.actions;

export const selectAllFavourites = (state: any) =>
  state.favourites.favourites as FavouritesData[];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateUserI, logarUsuarioI, UsersData } from "../../interfaces";

const InitialState: InitialStateUserI = {
  authenticed: localStorage.user ? true : false,
  users: localStorage.estado ? JSON.parse(localStorage.estado) : [],
  token: null,
  userSigned: localStorage.user ? JSON.parse(localStorage.user) : null,
};

const Users = createSlice({
  name: "Users",
  initialState: InitialState,
  reducers: {
    addUsers(state, { payload }: PayloadAction<UsersData[]>) {
      return { ...state, users: payload };
    },
    SignUser(state, { payload }: PayloadAction<logarUsuarioI>) {
      return {
        ...state,
        authenticed: true,
        userLogado: payload.user,
        token: payload.token,
      };
    },
    logoutUser(state) {
      return {
        ...state,
        authenticed: false,
        userLouserSigned: null,
        token: null,
      };
    },
  },
});

export default Users.reducer;

export const { addUsers, SignUser, logoutUser } = Users.actions;

export const selectUsers = (state: any) => state.users.users;
export const selectUserSigned = (state: any) => state.users.userSigned;
export const IsAuthenticed = (state: any) => state.users.authenticed;

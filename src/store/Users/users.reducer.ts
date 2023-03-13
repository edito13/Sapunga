import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateUserI, logarUsuarioI, UsersData } from "../../interfaces";

const InitialState: InitialStateUserI = {
  authenticed: localStorage.user ? true : false,
  users: localStorage.estado ? JSON.parse(localStorage.estado) : [],
  token: null,
  userLogado: localStorage.user ? JSON.parse(localStorage.user) : null,
};

const Users = createSlice({
  name: "Users",
  initialState: InitialState,
  reducers: {
    adicionarUsuarios(state, { payload }: PayloadAction<UsersData[]>) {
      return { ...state, users: payload };
    },
    logarUsuario(state, { payload }: PayloadAction<logarUsuarioI>) {
      return {
        ...state,
        authenticed: true,
        userLogado: payload.user,
        token: payload.token,
      };
    },
    logoutUser(state) {
      return { ...state, userLogado: null };
    },
  },
});

export default Users.reducer;

export const { adicionarUsuarios, logarUsuario, logoutUser } = Users.actions;

export const selectUsers = (state: any) => state.users.users as UsersData[];
export const selectUserLogado = (state: any) =>
  state.users.userLogado as UsersData;
export const IsAuthenticed = (state: any) => state.users.authenticed as boolean;

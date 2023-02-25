import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStateI, UsersData } from '../../interfaces'

const InitialState: InitialStateI = {
  authenticed: false,
  users: localStorage.estado ? JSON.parse(localStorage.estado) : [],
  token: null,
  userLogado: null
}

const Users = createSlice({
  name: "Users",
  initialState: InitialState,
  reducers: {
    adicionarUsuarios(state, { payload }: PayloadAction<UsersData[]>) {
      return {...state, users: payload}
    }
  }
})

export default Users.reducer

export const { adicionarUsuarios } = Users.actions

export const selectUsers = (state: any) => state.users.users as UsersData[];
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UsersData {
  _id: string;
  name: string;
  email: string;
}

const InitialState: UsersData[] = localStorage.estado ? JSON.parse(localStorage.estado) : [];

const Users = createSlice({
  name: "Users",
  initialState: InitialState,
  reducers: {
    adicionarUsuarios(state, { payload }: PayloadAction<UsersData[]>) {
      return [...payload]
    }
  }
})

export default Users.reducer

export const { adicionarUsuarios } = Users.actions

export const selectUsers = (state: any) => state.users as UsersData[];
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialStateAdminsI,
  AdminsData,
  SignInAdminI,
} from "../../interfaces";

const InitialState: InitialStateAdminsI = {
  authenticed: localStorage.admin ? true : false,
  admins: localStorage.admins ? JSON.parse(localStorage.admins) : [],
  token: null,
  adminSigned: localStorage.admin ? JSON.parse(localStorage.admin) : null,
};

const Admins = createSlice({
  name: "Admins",
  initialState: InitialState,
  reducers: {
    addAdmins(state, { payload }: PayloadAction<AdminsData[]>) {
      return { ...state, admins: payload };
    },
    SignInAdmin(state, { payload }: PayloadAction<SignInAdminI>) {
      return {
        ...state,
        authenticed: true,
        adminSigned: payload.admin,
        token: payload.token,
      };
    },
    SignUpAdmin(state) {
      return {
        ...state,
        authenticed: false,
        adminSigned: null,
        token: null,
      };
    },
  },
});

export default Admins.reducer;

export const { addAdmins, SignInAdmin, SignUpAdmin } = Admins.actions;

export const selectAdmins = (state: any) => state.admins.admins;
export const selectAdminSigned = (state: any) => state.admins.adminSigned;
export const IsAdminAuthenticed = (state: any) => state.admins.authenticed;

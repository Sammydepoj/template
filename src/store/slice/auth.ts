/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State } from "../../model/application/state";
import { Auth } from "../../model/application/payload";

const initialState: State.Auth = {};

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthKey: (state, action: PayloadAction<Auth>) => {
      const key: keyof State.Auth = action.payload.key;
      state = {
        ...state,
        [key]: action.payload.value,
      };
      return state;
    },
    setAllAuthKey: (state, action: PayloadAction<State.Auth>) => {
      state = action.payload as any;
      return state;
    },
  },
});

export const { setAuthKey, setAllAuthKey } = AuthSlice.actions;

export const authReducer = AuthSlice.reducer;

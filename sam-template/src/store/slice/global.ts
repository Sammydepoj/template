/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State } from "../../model/application/state";
import { Global } from "../../model/application/payload";

const initialState: State.Global = {
  menuCollapsed: false,
  selectedKey: "",
  pageTitle: "",
  breadcrumb: "",
  record: undefined,
  openMenuDrawer: false,
  request: undefined,
  response: undefined,
  postUrl: "",
  getUrl: "",
  updateUrl: "",
  selectUrl: "",
  deleteUrl: "",
  showFormModal: false
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGlobalKey: (state, action: PayloadAction<Global>) => {
      const key: keyof State.Global = action.payload.key;
      state = {
        ...state,
        [key]: action.payload.value,
      };
      return state;
    },
    setAllGlobalKey: (state, action: PayloadAction<State.Global>) => {
      state = action.payload as any;
      return state;
    },
  },
});

export const { setGlobalKey, setAllGlobalKey } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;

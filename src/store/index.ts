import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { themeReducer, setTheme } from "./slice/theme";
import { globalReducer, setAllGlobalKey, setGlobalKey } from "./slice/global";
import { authReducer } from "./slice/auth";
import { setAllAuthKey, setAuthKey } from "./slice/auth";

const reducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  global: globalReducer,
});

export const store = configureStore({
  reducer,
  devTools: import.meta.env.PROD === false,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat();
  },
});

// enable listener behavior for the store
setupListeners(store.dispatch);

export { setAllGlobalKey, setGlobalKey, setTheme, setAllAuthKey, setAuthKey };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

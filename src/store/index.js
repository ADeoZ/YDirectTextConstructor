import { configureStore } from "@reduxjs/toolkit";
import adForm from "../reducers/adFormSlice";

export const store = configureStore({
  reducer: {
    adForm,
  },
});

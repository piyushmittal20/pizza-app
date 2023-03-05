import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import prodReducer from "./prodSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    product: prodReducer,
  },
});

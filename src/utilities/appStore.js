import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer : {

        cart : cartReducer,  // using the cartSlice to create cart state and actions
    }
});

export default appStore;
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer";


const store2 = configureStore({
    reducer:{
        cart: cartSlice.reducer
    }
})

export default store2;
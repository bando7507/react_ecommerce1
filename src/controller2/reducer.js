import {
    createSlice
} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'carts',
    initialState: [],


    reducers: {
        addCart: (state, action) => {
            // { type: todo/addTaks, payload: "faire les couse"}
            state = [...state, action.payload]
            return state
        }
    }
})

export default cartSlice;


import { ADD_CARD } from "./type"

const inatialState = {
    carts: [],
}

export const cartReducer = (state = inatialState, action) =>{
    switch (action.type)  {
        case ADD_CARD :
            return{
                ...state,
                carts: [...state.carts, action.payload],
            }
        default:
            return state
    }
}
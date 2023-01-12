import {
    ADD_CARD, REMOVE, REMOVE_ITEM
} from "./type"

const inatialState = {
    carts: [],
}

export const cartReducer = (state = inatialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            const idProduct = state.carts.findIndex((id) => id.id === action.payload.id)
            if (idProduct >= 0) {
                state.carts[idProduct].qty += 1
            } else {
                const temp = {
                    ...action.payload,
                    qty: 1
                }
                return {
                    ...state,
                    carts: [...state.carts, temp],
                }
            }
            
            // return {
            //     ...state,
            //     carts: [...state.carts, action.payload],
            // }


        case REMOVE:
            const nwItem = state.carts.filter((el) => el.id !== action.payload)
            return {
                ...state,
                carts: nwItem
            }

        case REMOVE_ITEM:
            const idProduct2 = state.carts.findIndex((id) => id.id === action.payload.id)
            if(state.carts[idProduct2].qty >= 1){
                const del = (state.carts[idProduct2].qty -= 1)
                return {
                ...state,
                carts: [...state.carts],
            }
        }
        else if (state.carts[idProduct2].qty === 1){
            const nwItem2 = state.carts.filter((el) => el.id !== action.payload.id)
            return {
                ...state,
                carts: nwItem2
            }
        }
            
        default:
            return state
    }
}
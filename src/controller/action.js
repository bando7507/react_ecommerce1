import { ADD_CARD } from "./type"

export const ADD = (item) =>{
    return{
            type: ADD_CARD,
            payload: item
    }
}
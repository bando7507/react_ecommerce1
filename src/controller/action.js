import { ADD_CARD } from "./type"
import { REMOVE } from "./type"

export const ADD = (item) =>{
    return{
            type: ADD_CARD,
            payload: item
    }
}


export const DELETE = (id) =>{
    return{
            type: REMOVE,
            payload: id
    }
}
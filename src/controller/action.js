import { ADD_CARD, REMOVE_ITEM } from "./type"
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


export const DELETE__ITEM = (item) =>{
    return{
            type: REMOVE_ITEM,
            payload: item
    }
}
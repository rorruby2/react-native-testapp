import {ADD_TO_CART, REMOVE_FROM_CART, INCREASE_ITEM, DECREASE_ITEM} from './ConstantFiles/cartItem';
import axios from 'axios'
 
//Add to Cart
export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data,
    };
}; 

//Remove from Cart
export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item,
    };
}; 

// Increase cart item quantity
export const increaseCart = (item) => {
    return {
        type: INCREASE_ITEM,
        payload: item,
    };
}; 

// Decrease cart item quantity
export const decreaseCart = (item) => {
    return {
        type: DECREASE_ITEM,
        payload: item,
    };
};
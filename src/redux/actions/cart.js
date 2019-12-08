import { ADD_TO_CART, REMOVE_FROM_CART } from "../const/const";

export const addToCart = item => ({ type: ADD_TO_CART,  item });
export const removeFromCart = id => ({ type: REMOVE_FROM_CART,  id });



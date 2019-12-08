import { ADD_TO_CART, REMOVE_FROM_CART } from "../const/const";

const initialState = {
    items: []
};

const cart = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.item
                ]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            };
        default:
            return state;
    }
};

export default cart;
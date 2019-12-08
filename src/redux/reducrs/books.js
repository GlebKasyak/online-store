import { SET_BOOKS } from "../const/const";


const initialState = {
    items: null,
    isReady: false
};

const books = (state = initialState, action) => {
    switch(action.type) {
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        default:
            return state;
    }
};

export default books;
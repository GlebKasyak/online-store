import { combineReducers } from "redux";
import books from "./../reducrs/books";
import cart from "./../reducrs/cart";
import filter from "./../reducrs/filter";

const rootReducer = combineReducers({
    books,
    cart,
    filter
});

export default rootReducer;




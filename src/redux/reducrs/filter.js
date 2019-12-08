import { SET_FILTER, SET_SEARCH_QUERY } from "../const/const";


const initialState = {
    searchQuery: "",
    booksFilter: "all"
};

const filter = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.searchQuery,
            };
        case SET_FILTER:
            return {
                ...state,
                booksFilter: action.booksFilter,
            };
        default:
            return state;
    }
};

export default filter;
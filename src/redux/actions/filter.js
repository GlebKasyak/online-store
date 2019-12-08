import { SET_FILTER, SET_SEARCH_QUERY } from "../const/const";

export const setFilter = booksFilter => ({ type: SET_FILTER, booksFilter });
export const setSearchQuery = searchQuery => ({ type: SET_SEARCH_QUERY, searchQuery });



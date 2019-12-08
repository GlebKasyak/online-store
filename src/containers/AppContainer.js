import React, { useEffect } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import orderBy from "lodash/orderBy";

import { setBooks } from "./../redux/actions/books";
import App from "./../App.jsx";

// import { bindActionCreators } from "redux";
// import * as booksActions from "./../redux/actions/books";


const AppContainer = props => {
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("./books.json")
            .then(({ data }) => props.setBooks(data));
    };

     return <App {...props}/>
};

const mapStateToProps = ({ books, filter }) => ({
    books:
        books.items &&
        sortBy(searchBooks(books.items, filter.searchQuery), filter.booksFilter),
    isReady: books.isReady
});

const mapDispathToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case "price_height":
            return orderBy(books, "price", "desc");
        case "price_low":
            return orderBy(books, "price", "asc");
        case "author":
            return orderBy(books, "author", "asc");
        case "all":
        default:
            return books
    }
};

const searchBooks = (books, searchQuery) => (
    books.filter(
        book =>
            book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    )
);

// const mapDispathToProps = dispatch => ({
//     ...bindActionCreators(booksActions, dispatch)
// });

export default connect(mapStateToProps, mapDispathToProps)(AppContainer);

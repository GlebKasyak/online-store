import BooksFilter from "../components/BooksFilter/BooksFilter";
import { setFilter, setSearchQuery } from "../redux/actions/filter";
import { connect } from "react-redux";


const mapStateToProps = ({ filter }) => ({
    booksFilter: filter.booksFilter,
    searchQuery: filter.searchQuery
});

const mapDispatchToProps = dispatch => ({
    setFilter: booksFilter => dispatch(setFilter(booksFilter)),
    setSearchQuery: searchQuery => dispatch(setSearchQuery(searchQuery))
});

export default  connect(mapStateToProps, mapDispatchToProps)(BooksFilter);
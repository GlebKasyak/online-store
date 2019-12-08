import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import BookCard from "../components/BookCard/BookCard";


const mapStateToProps = ({ cart }, { id }) => ({
    addedCount: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0)
});

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
});

export default  connect(mapStateToProps, mapDispatchToProps)(BookCard);
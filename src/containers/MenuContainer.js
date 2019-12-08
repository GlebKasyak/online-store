import { addToCart, removeFromCart } from "../redux/actions/cart";
import { connect } from "react-redux";
import MenuComponent from "../components/Menu/Menu";
import uniqBy from "lodash/uniqBy";


const mapStateToProps = ({ cart }) => ({
        totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
        itemsQuantity: cart.items.length,
        //сортировка (чтобы не повторялись книги в корзине, по id)
        items: uniqBy(cart.items, book => book.id)
});

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item)),
    removeFromCart: id => dispatch(removeFromCart(id))
});

export default  connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
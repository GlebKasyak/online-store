import React from "react";
import { Menu, Popup } from 'semantic-ui-react'
import CartComponent from "./CartComponent";

const MenuComponent = ({ totalPrice, itemsQuantity, removeFromCart, items })  => (
        <Menu>
            <Menu.Item>Магазин книг</Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item>
                    Итого: <b>&nbsp;{ totalPrice }&nbsp;</b> руб.
                </Menu.Item>

                <Popup
                    trigger={
                        <Menu.Item>
                            Корзина (<b> { itemsQuantity } </b>)
                        </Menu.Item>
                    }
                    hideOnScroll
                    on="click"
                    content={ items.map(book =>
                        <CartComponent {...book} key={ book.id } removeFromCart={ removeFromCart }/>)
                    }
                />
            </Menu.Menu>
        </Menu>
);

export default MenuComponent;
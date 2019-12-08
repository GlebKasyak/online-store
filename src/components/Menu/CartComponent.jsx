import React from 'react';
import { Button, Image, List } from 'semantic-ui-react'
import { maxLengthTitle } from "../../utils/helpers";

const CartComponent = ({ title, id, image, removeFromCart }) => {
    return (
        <List animated selection verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button
                        color="red"
                        onClick={ removeFromCart.bind(this, id) }
                    >
                        Удалить
                    </Button>
                </List.Content>
                <Image avatar src={ image } />
                <List.Content>{ maxLengthTitle(title) }</List.Content>
            </List.Item>
        </List>
    );
};

export default CartComponent;
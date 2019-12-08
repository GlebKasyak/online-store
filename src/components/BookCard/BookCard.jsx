import React from 'react';
import "./BoolCardStyle.scss";
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { maxLengthTitle } from "../../utils/helpers";

const BookCard = book => {
    const { title, author, price, image, addToCart, addedCount } = book;

    return (
        <Card>
            <Image src={ image } wrapped ui={false} />
            <Card.Content>
                <Card.Header>{ maxLengthTitle(title) }</Card.Header>
                <Card.Meta>
                    <span className='date'>{ author }</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <div>
                    <Icon name='rub' />
                    { price }
                </div>
            </Card.Content>
            <Button onClick={ addToCart.bind(this, book) }>
                Добавить в корзину {addedCount > 0 && `(${ addedCount })`}
            </Button>
        </Card>
    );
};

export default BookCard;
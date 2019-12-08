import React from 'react';
import { Menu, Input } from 'semantic-ui-react'

const FILTER = [
    { type: "all", typeRus: "Все" },
    { type: "price_height", typeRus: "Цена (дорогие)" },
    { type: "price_low", typeRus: "Цена (дешёвые)" },
    { type: "author", typeRus: "Автор" },
];

const BooksFilter = ({ booksFilter, setFilter, searchQuery, setSearchQuery }) => (
        <Menu secondary>
            {FILTER.map(item =>
                <Menu.Item
                    key={ item.type }
                    active={ booksFilter === item.type }
                    onClick={ setFilter.bind(this, item.type) }
                >
                    { item.typeRus }
                </Menu.Item>
            )}
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input
                        icon='search'
                        type="text"
                        value={ searchQuery }
                        placeholder='Введите запрос...'
                        onChange={({ target }) => setSearchQuery(target.value) }
                    />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
);

export default BooksFilter;
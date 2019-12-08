import React  from 'react';
import './App.scss';
import { Container, Grid } from "semantic-ui-react";

import MenuComponent from "./containers/MenuContainer";
import BooksFilterContainer from "./containers/BookFilterContainer";
import BookCardContainer from "./containers/BookCardContainer";
import Preloader from "./components/Preloader/Preloader";

const App = ({ books, isReady }) => (
        <Container>
          <MenuComponent />
          <BooksFilterContainer />
          <Grid columns={4} >
            {!isReady
                ? <Preloader />
                : books.map(book =>
                    <Grid.Column key={ book.id }>
                        <BookCardContainer {...book}/>
                    </Grid.Column>
                )
            }
          </Grid>
        </Container>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";

import store from "./redux/store/store.js";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer/>
    </Provider>,
    document.getElementById('root'));


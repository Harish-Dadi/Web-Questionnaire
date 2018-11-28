// Importing React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Importing serviceWorker
import * as serviceWorker from './serviceWorker';

// Importing React-Redux
import { Provider } from 'react-redux'

// Importing Components
import App from './client/containers/App';

// Importing Styling files
import './assets/style/index.css';

// Importing store
import store from "./client/store/store"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();

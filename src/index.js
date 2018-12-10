// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Importing serviceWorker
import * as serviceWorker from "./serviceWorker";

// Importing React-Redux
import { Provider } from "react-redux";

// Importing Components
import App from "./client/containers/App";

// Importing Styling files
import "./assets/style/index.css";

// Importing store
import store from "./client/store/store";

//Importing Browser Router
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./client/components/Navigation";

import Summary from "./client/components/Summary";
store.subscribe(() => {
  console.log("Store updated ", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navigation />
        <switch>
          <Route path="/" component={App} exact />
          <Route path="/summary" component={Summary} />
        </switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

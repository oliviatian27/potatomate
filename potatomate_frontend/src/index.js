import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import indexRoutes from "./routes/index.jsx";
import {Provider} from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import Navbar from './Custom/shared/navbar'
import Notifications from './Custom/shared/notifications'
import Footer from './Custom/shared/footer'
import "./assets/scss/material-kit-pro-react.css?v=1.2.0";
import './app.css'
import { ActionCableProvider } from 'react-actioncable-provider';
import registerServiceWorker from './registerServiceWorker';
const store=createStore(reducer,applyMiddleware(thunk))
var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
   <ActionCableProvider url='wss://potato-mate.herokuapp.com/cable'>
      <Router history={hist}>
        <div>
        <Navbar history={hist}/>

        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route exact path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
        <Notifications />
        <Footer />
      </div>
      </Router>
  </ActionCableProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

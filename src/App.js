import { Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import NotificationsSystem from "reapop";
import theme from "reapop-theme-wybo";

import configStore, { history } from "./redux/config";

import React, { Component } from "react";
import "./App.css";

import {
	Login,
	Products,
	Categories,
	CategoriesCreate
} from "./views";
import {
	firebaseRegister
} from './service/FirebaseService/register';

const store = configStore();

class App extends Component {
  componentWillMount() {
	firebaseRegister.plugin();
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Switch>
              <div>
                <Route exact path="/" component={Login} />
                <Route exact path="/products" component={Products} />
				<Route exact path="/categories" component={Categories} />
				<Route exact path="/categories/create" component={CategoriesCreate} />
              </div>
            </Switch>
          </Router>
          <NotificationsSystem theme={theme} />
        </div>
      </Provider>
    );
  }
}

export default App;

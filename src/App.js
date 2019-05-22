import { Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import NotificationsSystem from "reapop";
import theme from "reapop-theme-wybo";

import configStore, { history } from "./redux/config";

import React, { Component } from "react";
import "./App.css";

import { Page1, Page2 } from "./views";

const store = configStore();

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Switch>
              <div>
                <Route exact path="/" component={Page1} />
                <Route exact path="/p2" component={Page2} />
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

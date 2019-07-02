import { Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import NotificationsSystem from "reapop";
import theme from "reapop-theme-wybo";

import configStore, { history } from "./redux/config";

import React, { Component } from "react";
import "./App.css";

import AppModule from './views/AppModule';

const store = configStore();

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Provider store={store}>
        <AppModule />
      </Provider>
    );
  }
}

export default App;

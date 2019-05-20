import React, { Component } from "react";
import Sidebar from "../components/Sidebar";

import { firebaseAuth } from "../service/FirebaseService/Authentication";

export default class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: null
    };
  }

  async componentDidMount() {
    await firebaseAuth.isAuthWithSetState(this.checkAuth);
  }

  checkAuth = isAuth => {
    this.setState({ isAuth });
  };

  render() {
    return (
      <main className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.state.isAuth ? <Sidebar /> : ""}
            </div>
            <div className="col-md-8">{this.props.children}</div>
          </div>
        </div>
      </main>
    );
  }
}

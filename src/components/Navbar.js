import React, { Component } from "react";

import { firebaseAuth } from "../service/FirebaseService/Authentication";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: null
    };
  }

  async componentDidMount() {
      await firebaseAuth.isAuthWithSetState(this.checkAuth);     
  }

  handleLogout = async () => {
    await firebaseAuth.logout();
    window.location.assign('/');
  }

  checkAuth = (isAuth) => {
    this.setState({isAuth}, () => {
        if (window.location.pathname === '/products' && !this.state.isAuth) {
            window.location.replace('/');
          } else if (window.location.pathname === '/' && this.state.isAuth) {
            window.location.replace('/products');
          }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#}">
            CMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" />

            <ul className="navbar-nav ml-auto">
              {this.state.isAuth ? (
                <li class="nav-item">
                  <a onClick={this.handleLogout} style={{ cursor: "pointer" }} class="nav-link">
                    Logout
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

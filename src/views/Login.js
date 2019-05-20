import React, { Component } from "react";
import Navbar from "../components/Navbar";
import AppLayout from "../Layouts/AppLayout";

import { firebaseAuth } from "../service/FirebaseService/Authentication";

export default class View1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  componentWillMount() {
    //   firebaseAuth.logout();
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleLoginSuccess = () => {
      this.props.history.push('products');
  } 

  handleSubmit = async (event) => {
      event.preventDefault();
      const { username, password } = this.state;
      const user = await firebaseAuth.loginWithUsername(username, password);
      if (user) {
        this.handleLoginSuccess();
      }
  }

  render() {
    return (
      <div>
        <Navbar />
        <AppLayout>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card card-default">
                  <div className="card-header">Login</div>
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group row mt-4">
                        <label
                          for="username"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          username
                        </label>
                        <div className="col-md-6">
                          <input
                            id="username"
                            onChange={this.handleInputChange("username")}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group row mt-4">
                        <label
                          for="password"
                          className="col-md-4 col-form-label text-md-right"
                        >
                          password
                        </label>
                        <div className="col-md-6">
                          <input
                            onChange={this.handleInputChange("password")}
                            id="password"
                            type="password"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group row mt-4">
                        <label className="col-md-4 col-form-label text-md-right" />
                        <div className="col-md-6">
                          <button type="submit" className="btn btn-success">Login</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppLayout>
      </div>
    );
  }
}

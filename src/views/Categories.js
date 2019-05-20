import React, { Component } from "react";
import Navbar from "../components/Navbar";
import AppLayout from "../Layouts/AppLayout";

export default class View1 extends Component {

  handleGotoCreate = () => {
    this.props.history.push('/categories/create');
  }

  render() {
    return (
      <div>
        <Navbar />
        <AppLayout>
          <div className="d-flex justify-content-end mb-2">
            <button onClick={this.handleGotoCreate}  className="btn btn-success">Add Category</button>
          </div>

        </AppLayout>
      </div>
    );
  }
}

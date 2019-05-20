import React, { Component } from "react";
import Navbar from "../components/Navbar";
import AppLayout from "../Layouts/AppLayout";

export default class View1 extends Component {

  handleGotoCreateProduct = () => {
    this.props.history.push('/products/create');
  }

  render() {
    return (
      <div>
        <Navbar />
        <AppLayout>
          <div className="d-flex justify-content-end mb-2">
            <button onClick={this.handleGotoCreateProduct}  className="btn btn-success">Add Product</button>
          </div>

        </AppLayout>
      </div>
    );
  }
}

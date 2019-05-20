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
            <div className="card card-default">
                <div className="card-header">
                    Create Category
                </div>
            </div>

        </AppLayout>
      </div>
    );
  }
}

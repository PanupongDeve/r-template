import React, { Component } from "react";
import  {
    connect
} from 'react-redux';

class Sidebar extends Component {

    handleRedirect = (pathname) => () => {
        this.props.history.push(pathname);
    }

  render() {
    return (
        <ul className="list-group">
          <li className="list-group-item">
            <a href="#" onClick={this.handleRedirect('/products')}>Product</a>
          </li>
          <li className="list-group-item">
            <a href="#" onClick={this.handleRedirect('/categories')}>Categories</a>
          </li>
        </ul>
    );
  }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        history: state.history
    }
}


export default connect(mapStateToProps)(Sidebar);
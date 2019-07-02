import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';


  class Box extends Component {
    
    render() {
      return (
        <Card>
          <CardHeader>{this.props.header}</CardHeader>
          <CardBody>
            {this.props.children}
          </CardBody>
      </Card>
      );
    }
  }


  export default Box;

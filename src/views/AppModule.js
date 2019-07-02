import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Box from '../Layouts/Box';
import SelectLanguage from '../Helper/SelectLanguage'
import Config from '../components/Config';
import View from '../components/View';

class AppModule extends Component {
    render() {
        const { SearchEngine } = this.props.content;
        const SearchEngineContent = SelectLanguage(SearchEngine, 'en');
        return (
            <Box header={SearchEngineContent.header}>
                <Row>
                    <Col sm="6">
                        <Config SearchEngineContent={SearchEngineContent}/>
                    </Col>
                    <Col sm="6">
                        <View />
                    </Col>
                </Row>
            </Box>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      content: state.content
    }
  }

export default connect(mapStateToProps)(AppModule);
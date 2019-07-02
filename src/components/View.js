import { connect } from 'react-redux';
import React, { Component } from 'react';


 class Component1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>VIEW1</h1>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps)(Component1);


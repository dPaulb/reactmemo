import React, { Component } from 'react';
import Home from 'Containers/Home';

class Wall extends Component {

    render() {
        return (
            <Home username={this.props.match.params.username}></Home>
        );
    }
}

export default Wall;
/**
 * Created by am_ry on 16.11.2017.
 */
import React from 'react';

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

export default Welcome;
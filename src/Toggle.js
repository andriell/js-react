/**
 * Created by am_ry on 16.11.2017.
 */

import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true, count: 0};
        // Это нужно сделать что бы в handleClick this указывало на это this
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(count) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            count: count,
        }));
    };

    render() {
        return (
            <button onClick={(e) => {this.handleClick(this.state.count + 1)}}>
                {this.state.isToggleOn ? 'ON' : 'OFF'} {this.state.count}
            </button>
        );
    }
}

export default Toggle
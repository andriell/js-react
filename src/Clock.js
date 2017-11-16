/**
 * Created by am_ry on 16.11.2017.
 */
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), name: 'Time'};
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h2>{this.state.name} it is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;
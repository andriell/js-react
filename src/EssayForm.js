/**
 * Created by am_ry on 21.11.2017.
 */

import React from 'react';

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.',
            items: [1, 2, 3],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.state.items.push(this.state.value);
        this.setState({items: this.state.items});
        event.preventDefault();
    }

    render() {
        let items = [];
        for (let item of this.state.items) {
            items.push(<div>{item}</div>);
        }
        return (
            <div>
                {items}
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                Value:
                            </td>
                            <td>
                                {this.state.value}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Name:
                            </td>
                            <td>
                                <textarea value={this.state.value} onChange={this.handleChange} style={{width: '400px', height: '100px'}} />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <input type="submit" value="Submit" />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>

        );
    }
}

export default EssayForm;

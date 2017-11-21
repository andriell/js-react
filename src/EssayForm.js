/**
 * Created by am_ry on 21.11.2017.
 */

import React from 'react';

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.',
            select: 'A',
            items: [1, 2, 3],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        this.state.items.push(this.state.select + ':' + this.state.value);
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
                            <td>Value:</td>
                            <td>{this.state.value}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>
                                <select name="select" onChange={this.handleInputChange}>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <textarea name="value" value={this.state.value} onChange={this.handleInputChange} style={{width: '400px', height: '100px'}} />
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

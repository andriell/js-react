import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';

class App extends Component {
    render() {
        var i = new Date().toLocaleTimeString();

        setInterval(() => {
            i = new Date().toLocaleTimeString()
        }, 1000);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Welcome name={i}/>
            </div>
        );
    }
}

export default App;

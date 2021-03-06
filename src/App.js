import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';
import Clock from './Clock.js';
import Toggle from './Toggle.js';
import EssayForm from './EssayForm.js';
import Calculator from './Calculator.js';

class App extends Component {
    render() {
        let i = '<Sara>';
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
                <Clock />
                <Toggle />
                <EssayForm />
                <Calculator />
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import logo from '../static/img/logo.svg';
import '../static/css/App.css';
import PostView from "./PostView";

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                </div>
                <PostView/>
            </div>
        );
    }
}

export default App;

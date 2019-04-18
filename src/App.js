import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
    <div className="App">
        <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <p>
						Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
            </a>
        </header>
    </div>
		);
	}
}

export default App;

/*redux -> Redux library 
 react-redux -> Integration layer between react and redux
 axios -> Helps us make network request
 redux-thunk -> Middleware(functions that are going to slightly change the behaviour of our redux store ) to help us make network request in a redux application
*/

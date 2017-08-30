import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkedUp from './components/MarkedUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1>Markdown Previewer</h1>
        </div>
        <MarkedUp />
        </div>
    );
  }
}

export default App;

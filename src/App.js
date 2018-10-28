import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main"></div>
        <Button><img src="desayuno.png"/></Button>
      </div>
    );
  }
}

export default App;

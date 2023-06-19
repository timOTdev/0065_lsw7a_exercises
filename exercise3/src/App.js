import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List"

class App extends Component {
  constructor() {
    super()
    this.state = {
      cars: [
        {
          "id": 1,
          "make": "Bugatti",
          "model": "Veyron",
          "color": "Khaki"
        },
        {
          "id": 2,
          "make": "Dodge",
          "model": "Ram 1500",
          "color": "Indigo"
        },
        {
          "id": 3,
          "make": "Chevrolet",
          "model": "Camaro",
          "color": "Puce"
        },
        {
          "id": 4,
          "make": "Honda",
          "model": "Odyssey",
          "color": "Violet"
        },
        {
          "id": 5,
          "make": "Infiniti",
          "model": "I",
          "color": "Mauv"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List cars={this.state.cars} />
      </div>
    );
  }
}

export default App;

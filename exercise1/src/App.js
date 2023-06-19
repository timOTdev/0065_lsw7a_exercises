import React, { Component } from 'react';
import logo from './logo.svg';
import animals from './animalsData'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      animals: animals
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Animals</h1>
        </header>
        
        <div>
          {this.state.avengers.map( avenger => (
            <div key={avenger.id}>
              <p>
                Hero Name: {avenger.heroName} Real Name: {avenger.realName}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

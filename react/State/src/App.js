import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLight from './component/trafficlight.js';

class App extends Component {
  render(){
    return (
      <div>
        <TrafficLight/>
      </div>
    );
  }; 
};

export default App;

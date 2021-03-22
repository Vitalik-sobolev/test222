import './App.css';
import React, { Component } from "react";
import Iframe from './iframe.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:'test.html'
    };
  }

  render() {
    return (
      <div className="App">
        <h1>react</h1>
        <Iframe source={this.state.src} />

      </div>
    );
  }  
}
import React, { Component } from 'react';
import City from "./components/City";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Search for Zip Codes based on City Names</h1>
        <City />
      </div>
    );
  }
}
export default App;
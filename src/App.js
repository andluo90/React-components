import React, { Component } from 'react';
import './App.css';

import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Button component</h1>
        <Button value='Button1'/>
        <Button value='Button2'/>
        <Button value='Button3'/>
      </div>
      
    );
  }
}

export default App;

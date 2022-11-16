import React from 'react';
import { Component } from 'react';
import SuperMan from './superman';
class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello Vue.js!'
    }
  }
 
  render() {
    return (
      <div>
        <SuperMan work='超人'></SuperMan>
      </div>
    )
  }
}
export default App
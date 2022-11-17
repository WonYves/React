import React from 'react';
import { Component } from 'react';
import SuperMan from './superman';
class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
 
  render() {
    return (
      <div>
        <SuperMan obj={{name: 'kerwin',position : '前端攻城狮'}}></SuperMan>
        <Center text='hi props'></Center>
      </div>
    )
  }
}

class Center extends Component {
  render(){
    return <div>{this.props.text}</div>
  }
}

export default App
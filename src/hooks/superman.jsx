import React, { Component } from 'react'

export default class superman extends Component {
  render() {
    return (
      <div>
        <span>{this.props.obj.name}</span>
        <span>{this.props.obj.position}</span>
      </div>
    )
  }
}

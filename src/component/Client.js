import React, { Component } from 'react'

export default class Client extends Component {
    componentWillUnmount(){
        alert("componentWillUnmount on")
        
    }
  render() {
    return (
      <div>
        <h1>Client Update </h1>
      </div>
    )
  }
}

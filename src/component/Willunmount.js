import React, { Component } from 'react'
import Client from './Client';

export default class Willunmount extends Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }
  render() {
    return (
      <div>
      {
        this.state.show ? <Client/>:<h1>Client Not Update</h1>
      } 
        <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
        
      </div>
    )
  }
}

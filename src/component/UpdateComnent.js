import React, { Component } from 'react'

export default class UpdateComnent extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
  shouldComponentUpdate(){
    console.log(this.state.count)
    this.state={
        count:this.state.count+1
    }
   
    return true;
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update State</button>
      </div>
    )
  }
}

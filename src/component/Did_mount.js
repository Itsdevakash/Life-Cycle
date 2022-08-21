import React, { Component } from 'react'

export default class Did_mount extends Component {
    constructor(){
        super();
    this.state={
        name:"akash"
    }
        console.log('con')
    }
    componentDidMount(){
    console.log('did')
    
    }
  render() {
    console.log('re')
 
    return (
      <div>
          <h1>{this.state.name}</h1>
   <button onClick={()=>this.setState({name:"maurya"})}>Update State</button>
      </div>
    )
  }
}

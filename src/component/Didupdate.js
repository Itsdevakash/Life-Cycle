import React, { Component } from 'react'

export default class Didupdate extends Component {
    constructor(){
        super();
        console.log('con')
        this.state={
            name:"Akash",
            count:0
        }
    }
    componentDidUpdate(preProps,preState,snapshot){
        console.log('Update',preState.count,this.state.count)
        if(preState.count !== this.state.count){
            alert('data is right')
        }
      
    }
  render() {
    console.log('ren')
    return (
      <div>
        <h1>{this.state.name},{this.state.count}</h1>
        <button onClick={()=>this.setState({name:"Maurya",count:this.state.count+1})}>Update State</button>
      
        
      </div>
    )
  }
}

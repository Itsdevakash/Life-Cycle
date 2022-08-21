import React, { Component } from 'react'

export default class Render extends React.Component {
constructor(){
  super();
  this.state={
    email: "mauryaakash"
  }
}
  render() {
    console.warn("Reader Method")
    return (
      <div>
        <div>
            <h1>{this.props.name},{this.state.email}</h1>
            <button onClick={()=>this.setState({email:"akashmaurya"})}>Update Email</button><br></br>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Event extends Component {
    state={
        username:""
        
    }
    handleClick=()=>{
        console.log(this.state.username)
        this.setState({
            username:""
        })
    }
    handleUser=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  render() {
    return (
      <div>
        <input name='username' type="text" placeholder='username' value={this.state.username} onChange={this.handleUser}/>
       <button onClick={this.handleClick}>submit</button> 
        </div>
    )
  }
}

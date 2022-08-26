import axios from 'axios';
import React, { Component } from 'react'

export default class UserSignUp extends Component {
state={
  userName:null,
  displayName:null,
  password:null,
  passwordRepeat:null
};
  onchange=event=>{
    const {value,name}=event.target;
    this.setState({[name]:value})
  }

  onClickSignup=event=>{
    event.preventDefault();
    const {userName,password,displayName}=this.state;
    const body ={userName, password, displayName};
    axios.post("/api/users",body);
  }

  render() {
    return (
      <form>
         <h1>SignUp</h1>
      <div>
        <label>Display Name</label>
        <input type="text" name='displayName' onChange={this.onchange}/>
      </div>
      <div>
        <label>userName </label>
        <input type="text"  name='userName' onChange={this.onchange}/>
      </div>
      <div>
        <label>Password </label>
        <input type="password" name='password'  onChange={this.onchange}/>
      </div>
      <div>
        <label>Password Repeat </label>
        <input type="password" name='passwordRepeat'  onChange={this.onchange}/>
      </div>
   
      <button onClick={this.onClickSignup}>SignUp!</button>
      </form>
     
    )
  }}


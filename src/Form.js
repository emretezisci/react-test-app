import React, { Component } from "react";

export default class Form extends Component {
  state = { username: "" , city: ""};
  onChangeHandler = (event) => {
    // this.setState({ username: event.target.value });
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name]: value})
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User name</h3>
          <input name="userName" onChange={this.onChangeHandler}></input>
          <h3> Username is {this.state.userName}</h3>

          <h3>City</h3>
          <input name="city" onChange={this.onChangeHandler}></input>
          <h3> City is {this.state.city}</h3>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

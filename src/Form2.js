import React, { Component } from "react";
import alertify from "alertifyjs";
import { Input, Label, FormGroup, Button } from "reactstrap";

export default class Form2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handlerChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handlerChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handlerChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handlerChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              placeholder="Enter description"
              onChange={this.handlerChange}
            >
              <option>San Francisco</option>
              <option>Berlin</option>
              <option>Porto</option>
            </Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

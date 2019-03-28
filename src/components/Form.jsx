import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
class Form extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      gender: "male",
      showData: false
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            handleChange={this.handleFname}
            type={"text"}
            title={"First Name-"}
            name={"fname"}
            value={this.state.fname}
            placeholder={"Enter your First name"}
          />

          <Input
            handleChange={this.handleLname}
            type={"text"}
            title={"Last Name-"}
            name={"lname"}
            value={this.state.lname}
            placeholder={"Enter your Last name"}
          />

          <Input
            handleChange={this.handleEmail}
            type={"email"}
            title={"Enter Email-"}
            name={"email"}
            value={this.state.email}
            placeholder={"Enter your Email"}
          />

          <Input
            handleChange={this.handlePassword}
            type={"password"}
            title={"Enter Password-"}
            name={"password"}
            value={this.state.password}
            placeholder={"Enter your Password"}
          />
          <Select
            title={"Choose Gender-"}
            name={"gender"}
            value={this.state.gender}
            handleChange={this.handleGender}
          />

          <Button type={"submit"} title={"submit"} value={"submit"} />

          <p name="details">{this.state.value}</p>
        </form>
        <div>
          {this.data.map((user, index) => {
            return (
              <p key={index}>
                <b>S No: </b>
                {index + 1},<b> First Name :</b> {user.fname},
                <b> Last Name :</b> {user.lname}, <b>Email : </b>
                {user.email}, <b>Password</b> : {user.password}, <b>Gender</b> :{" "}
                {user.gender}
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  handleFname = event => {
    this.setState({
      fname: event.target.value
    });
  };
  handleLname = event => {
    this.setState({
      lname: event.target.value
    });
  };
  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleGender = event => {
    console.log(event.target.value);
    this.setState({
      gender: event.target.value
    });
    // console.log(this.state.gender);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.data.push(this.state);
    console.log(this.data);
    // this.setState({ showData: true });
    this.setState({
      fname: "",
      lname: "",
      email: "",
      password: "",
      gender: ""
    });
  };
}

export default Form;

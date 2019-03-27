import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      gender:"",
      age: "",
      genderOptions: ["male", "female", "other"]
    };
  }

  render() {
    return (
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
          options={this.state.genderOptions}
          value={this.state.gender}
          handleChange={this.state.handleGender}
         
        />

        <Button type={"submit"} 
        title={"submit"} 
        value={"submit"}
        handleChange={this.handleSubmit} />

        <Button type={"reset"} title={"reset"} value={"submit"} />

       
      </form>
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
 
  handleGender= event=>{
    this.setState({
      gender: event.target.value
    });
  }
  handleSubmit = event=> {
    event.preventDefault();
    console.log(this.state.gender)

    };
}

export default Form;

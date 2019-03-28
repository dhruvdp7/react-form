import React, { Component } from "react";
import Form from "./Form";
// import Table from "./Table";

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Registration Form</h1>
        <Form />
        <p>{}</p>
      </div>
    );
  }
}
export default App;

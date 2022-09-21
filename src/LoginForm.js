import React, { Component } from "react";

export default class LoginForm extends Component {
  state = {
    formData: {
      email: "",
      password: "",
    },
  };

  handleOnChange = (e) => {
    console.log(e.target.name);
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleOnSubmit = (e) => {};

  render() {
    const { formData } = this.state;
    return (
      <div className="col-md-4 offset-md-4 mt-2">
        <h1>Login Form</h1>
        <form>
          <div className="form-group mb-2 ">
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group ">
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}



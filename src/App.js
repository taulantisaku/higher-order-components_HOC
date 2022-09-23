import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class App extends Component {
  state = {
    selectedTab: "login",
  };

  setSelectedTab = (tab) => this.setState({ selectedTab: tab });

  render() {
    const { selectedTab } = this.state;
    return (
      <div className="App container mt-2">
        <div className="d-flex justify-content-center">
          <button
            onClick={() => this.setSelectedTab("login")}
            className={`btn btn-default ${
              selectedTab === "login" ? "btn-success" : ""
            }`}
          >
            Login
          </button>
          <button
            onClick={() => this.setSelectedTab("register")}
            className={`btn btn-default ${
              selectedTab === "register" ? "btn-success" : ""
            }`}
          >
            Register
          </button>
        </div>

        <div className="row">
          {selectedTab === "login" && (
            <LoginForm initialState={{ email: "", password: "" }} color="red" />
          )}
          {selectedTab === "register" && (
            <RegisterForm
              initialState={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import { setAuthenticationToken } from "../utils";
const LOGIN_URL = "http://localhost:3001/api/auth/";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  handleTextBoxOnChange = e => {
    let user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleLoginButtonClick = () => {
    let user = this.state.user;
    // console.log(user);

    axios
      .post(LOGIN_URL, user)
      .then(response => {
        console.log(response);

        // save the token to localStorage so we can access it later on
        localStorage.setItem("jsonwebtoken", response.data.token);
        // put the token in the request header
        setAuthenticationToken(response.data.token);

        window.location = "/";
      })
      .catch(rejected => {
        console.log("Login user connection error: ", rejected);
      });
  };

  render() {
    return (
      <div>
        <div>Login</div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Email As Username"
              name="email"
              onChange={this.handleTextBoxOnChange}
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={this.handleTextBoxOnChange}
            />

            <button onClick={this.handleLoginButtonClick}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

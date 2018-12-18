import React, { Component } from "react";
import { connect } from "react-redux";
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

  componentDidMount() {
    const token = localStorage.getItem("jsonwebtoken");
    // console.log("test");
    if (!token || token === "undefined") {
      console.log("Not authorized");
    } else {
      console.log("Authorized");
      this.props.onAuthenticate();
    }
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
        console.log(response.data);

        /* works
        // save the token to localStorage so we can access it later on
        localStorage.setItem("jsonwebtoken", response.data.token);
        // put the token in the request header
        setAuthenticationToken(response.data.token);
        */

        if (response.data.success === false) {
          console.log("false");
        } else {
          console.log("blah");

          // save the token to localStorage so we can access it later on
          localStorage.setItem("jsonwebtoken", response.data.token);
          // put the token in the request header
          setAuthenticationToken(response.data.token);
          console.log(response.data); // response.data
          this.props.onAuthenticate();
          this.props.history.push("/");
        }

        // window.location = "/";
        // console.log(response.data.token);
        // if (response.data.token !== "undefined") {
        //   this.props.history.push("/");
        // }
        // this.props.history.push("/");
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

const mapDispatchToProps = dispatch => {
  return {
    // onAuthenticate: userData =>
    onAuthenticate: () =>
      dispatch({
        type: "SET_AUTHENTICATE"
        // userData: userData
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);

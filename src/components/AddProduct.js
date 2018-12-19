import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";

class AddProduct extends Component {
  componentDidMount() {
    // If page "Refreshed" manually override redux property isAuth: true|false accordingly
    // console.log(this.props.isAuth);  // on refresh redux state is reset so do not use
    const token = localStorage.getItem("jsonwebtoken");
    // console.log("test");
    if (!token || token === "undefined") {
      console.log("Not Authorized"); // just display all Items
    } else {
      console.log("Authorized - from AddProducts - issue");

      // Need to get payload userData from the token in localstore
      const tokenInfo = jwtDecode(token);
      console.log("tokeninfo - ", tokenInfo); // {email: "sam@mail.com", name: "Sam", isAdmin: true, iat: 1545188894 }

      const formattedTokenInfo = {
        email: tokenInfo.email,
        name: tokenInfo.name,
        isAdmin: tokenInfo.isAdmin
      };
      // If page "Refreshed" manually override redux property isAuth: true
      // this.props.onAuthenticate();
      // this.props.onAuthenticateManuallySet(true);
      this.props.onAuthenticateManuallySet(true, formattedTokenInfo);
    }
  }

  render() {
    return <div>App Product - Admin Page Only</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthenticateManuallySet: (boolValue, tokenInfo) =>
      dispatch({
        type: "SET_AUTHENTICATE_MANUALLY",
        boolValue: boolValue,
        tokenInfo: tokenInfo
      })
  };
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(AddProduct);

// export default AddProduct;

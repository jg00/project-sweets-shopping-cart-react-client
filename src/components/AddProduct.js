import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";
const ADD_PRODUCT_URL = "http://localhost:3001/api/products/add";

class AddProduct extends Component {
  constructor(props) {
    super(props);

    console.log("addproduct", this.props);

    this.state = {
      product: {},
      result: ""
    };
  }

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

  handleTextBoxOnChange = e => {
    this.setState({
      product: {
        ...this.state.product,
        [e.target.name]: e.target.value
      }
    });
  };

  handleAddProductButtonClick = () => {
    // console.log("button", this);
    // console.log(this.state.book);

    let product = this.state.product;
    console.log("test product", product);

    /*
    const token = localStorage.getItem("jsonwebtoken");
    // console.log("From LocalStorage:", token);
    // put the token in the request header
    setAuthenticationToken(token);
*/

    axios
      .post(ADD_PRODUCT_URL, product)
      .then(response => {
        // console.log(response);
        console.log("Product added: ", response.data);
        // this.props.history.push("/");

        const result = response.data;
        console.log(result);
        console.log(result.message);

        // if (result.success) {
        // console.log("t");

        this.setState({
          ...this.state,
          // product: result
          result: result.message
        });
      })
      .catch(rejected => {
        console.log("Add product connection error: ", rejected);
      });
  };

  render() {
    // console.log(this.state.product._id);
    // let result = this.state.product.name;

    return (
      <div>
        <div>App Product - Admin Page Only</div>
        <input
          type="text"
          placeholder="Product Name*"
          name="name"
          onChange={this.handleTextBoxOnChange}
        />
        <input
          type="text"
          placeholder="Price*"
          name="price"
          onChange={this.handleTextBoxOnChange}
        />
        <input
          type="text"
          placeholder="Types"
          name="types"
          onChange={this.handleTextBoxOnChange}
        />
        <input
          type="text"
          placeholder="Image Url*"
          name="image"
          onChange={this.handleTextBoxOnChange}
        />
        <button onClick={this.handleAddProductButtonClick}>Add Product</button>
        <p>{this.state.result}</p>
      </div>
    );
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

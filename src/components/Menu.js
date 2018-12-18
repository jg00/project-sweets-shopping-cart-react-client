import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="div-menu">
        <ul className="div-menu-ul">
          <li className="div-menu-li">
            <Link to="/">All Items</Link>
          </li>
          <li className="div-menu-li">
            <Link to="/AddItem">Add Item</Link>
          </li>
          <li className="div-menu-li">
            <Link to="/Login">Login</Link>
          </li>
          <li className="div-menu-li">
            <Link to="/Register">Register</Link>
          </li>
          <li className="div-menu-li">
            <Link to="/AddProduct">Add Product</Link>
          </li>
          {/* <li>{this.props.user.name}</li> */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
    // user: state.user
  };
};

export default connect(mapStateToProps)(Menu);
// export default Menu;

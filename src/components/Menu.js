import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        </ul>
      </div>
    );
  }
}

export default Menu;

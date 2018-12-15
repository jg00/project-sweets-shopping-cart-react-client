import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import AllItems from "./AllItems";
import AddItem from "./AddItem";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={AllItems} />
          <Route path="/AddItem" component={AddItem} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/AddProduct" component={AddProduct} />
        </Switch>
      </div>
    );
  }
}

export default BaseLayout;

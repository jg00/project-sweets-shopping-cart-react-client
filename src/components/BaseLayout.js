import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
import Menu from "./Menu";
import AllItems from "./AllItems";
import AddItem from "./AddItem";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";

class BaseLayout extends Component {
  // componentDidMount() {
  //   const token = localStorage.getItem("jsonwebtoken");

  // if (!token) {
  //   console.log(token);
  // this.props.onAuthenticate();
  // }
  // }

  // componentDidMount() {
  //   const token = localStorage.getItem("jsonwebtoken");
  //   // console.log("test");
  //   // if (!token) {
  //   console.log(token);
  //   // this.props.onAuthenticate();
  //   // }
  // }

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

// const mapDispatchToProps = dispatch => {
//   return {
//     onAuthenticate: () =>
//       dispatch({
//         type: "SET_AUTHENTICATE"
//       })
//   };
// };

export default BaseLayout;
// export default connect(
//   null,
//   mapDispatchToProps
// )(BaseLayout);

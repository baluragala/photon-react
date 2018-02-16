import React, { Component } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./App.css";
import Timer from "./Timer";
import Counter from "./Counter";
import Quotes from "./Quotes";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetail from "./components/ProductDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  doLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  render() {
    return (
      <div>
        <Header />
        <button style={{ paddingTop: "100px" }} onClick={this.doLogin}>
          Simulate Login
        </button>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <ProductList {...props} category={"electronics"} />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/product-detail/:name/:price"
            render={props =>
              this.state.isLoggedIn ? (
                <ProductDetail {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;

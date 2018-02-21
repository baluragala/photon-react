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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/products";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.getProducts();
  }

  render() {
    console.log(this.props.isLoading);
    return (
      <div>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              this.props.isLoading ? (
                <p style={{ paddingTop: "100px" }}>Loading...</p>
              ) : (
                <ProductList {...props} products={this.props.products} />
              )
            }
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

function mapStateToProps(state) {
  return {
    products: state.productsState.products,
    isLoading: state.productsState.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

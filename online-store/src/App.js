import React, { Component } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./App.css";
import Timer from "./Timer";
import Counter from "./Counter";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return [<Header />, <ProductList />];
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as counterActions from "./actionCreators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.inc}>INC</button>
        <button onClick={this.props.dec}>DEC</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: () => dispatch(counterActions.incAction(2)),
    dec: () => dispatch(counterActions.decAction(3))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

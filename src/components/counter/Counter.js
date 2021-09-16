// import React from 'react';
import { Component } from "react";

class Counter extends Component {
  state = { val: 0 };

  inc = () => {
    const { val } = this.state;
    this.setState({ val: val + 1 });
  };

  dec = () => {
    const { val } = this.state;
    this.setState({ val: val - 1 });
  };

  render() {
    const { val } = this.state;
    const { name } = this.props;
    return (
      <>
        <h1 style={{ backgroundColor: name }}>{name} Counter</h1>
        <p>{val}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </>
    );
  }
}

export default Counter;

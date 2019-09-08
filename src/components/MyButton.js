import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class MyButton extends Component {
  onClick(event) {
    const value = event.target.value;
    this.props.onSubmit(value);
  }

  render() {
    return (
      <Button
        variant="link"
        value={this.props.value}
        onClick={e => this.onClick(e)}
      >
        {this.props.value}
      </Button>
    );
  }
}

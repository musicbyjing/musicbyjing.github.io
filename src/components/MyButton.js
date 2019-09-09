import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class MyButton extends Component {
  render() {
    return (
      <Button
        variant="link"
        value={this.props.value}
        onClick={e => {
          e.preventDefault();
          this.props.handleSubmit(this.props.value);
        }}
      >
        {this.props.value}
      </Button>
    );
  }
}

import React, { Component } from "react";
import "./App.scss";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gallery: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(inputValue) {
    this.setState({
      gallery: inputValue
    });
  }

  render() {
    const { gallery } = this.state;
    return (
      <div>
        {!gallery && <Welcome handleSubmit={this.handleSubmit} />}
        {gallery && <Gallery gallery={gallery} />}
      </div>
    );
  }
}

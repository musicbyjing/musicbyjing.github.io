import React, { Component } from "react";
import "./App.scss";
import Welcome from "./components/Welcome";
import MyGallery from "./components/MyGallery";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gallery: "back" };
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
      <div style={{ backgroundColor: "#80CDCD" }}>
        {gallery === "back" && <Welcome handleSubmit={this.handleSubmit} />}
        {gallery !== "back" && (
          <MyGallery
            gallery={this.state.gallery}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

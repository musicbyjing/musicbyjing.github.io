import React, { Component } from "react";
import "./App.scss";
import Welcome from "./components/Welcome";
import MyGallery from "./components/MyGallery";

const colors = [
  "#212822",
  "#d3d9ec",
  "#a66473",
  "#75526e",
  "#545676",
  "#878590",
  "#c5b2d6"
];

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
    let bgColor = colors[Math.floor(Math.random() * colors.length)];
    const { gallery } = this.state;
    return (
      <div style={{ backgroundColor: bgColor }}>
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

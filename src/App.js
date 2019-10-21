import React, { Component } from "react";
import "./App.scss";
import Welcome from "./components/Welcome";
import About from "./components/About";
import MyGallery from "./components/MyGallery";

const colors = [
  "#75526e", // dark purple
  "#545676", // dark blue
  "#a66473", // medium red
  "#878590", // gray
  "#c5b2d6" // light purple
  // Text colors:
  // "#212822", // dark green
  // "#d3d9ec", // sky blue
];

const textColor = bgColor => {
  if (bgColor === "#75526e" || bgColor === "#545676") return "#d3d9ec";
  else return "#212822";
};

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
      <div style={{ backgroundColor: bgColor, color: textColor(bgColor) }}>
        {gallery !== "about" && <Welcome handleSubmit={this.handleSubmit} />}
        {gallery === "about" && <About handleSubmit={this.handleSubmit} />}
        {gallery !== "back" && gallery !== "about" && (
          <MyGallery
            gallery={this.state.gallery}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

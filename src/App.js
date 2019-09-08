import React, { Component } from "react";
import "./App.scss";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gallery: 0 }; // 0 indicates the "homepage"
  }

  render() {
    const { gallery } = this.state;
    return (
      <div>
        {gallery === 0 && <Welcome />}
        {gallery !== 0 && <Gallery gallery={gallery} />}
      </div>
    );
  }
}

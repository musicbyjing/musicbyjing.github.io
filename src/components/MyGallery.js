import React from "react";
import Gallery from "react-photo-gallery";
import photos from "./photos.js";
import MyButton from "./MyButton";

export default class MyGallery extends React.Component {
  importAll(list) {
    // for (e of list) {
    // }
  }

  render() {
    // let bob = this.props.gallery;

    const Column = () => <Gallery photos={photos} direction={"column"} />;

    return (
      <>
        <Column />
        <MyButton value="back" handleSubmit={this.props.handleSubmit} />
      </>
    );
  }
}

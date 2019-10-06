import React from "react";
import Gallery from "react-photo-gallery";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import photos from "./photos.js";
import MyButton from "./MyButton";

export default class MyGallery extends React.Component {
  render() {
    const Column = () => <Gallery photos={photos} direction={"column"} />;

    return (
      <div className="paddedContainer" style={{ backgroundColor: "white" }}>
        <Column />
        <ButtonToolbar className="justify-content-center gallery">
          <MyButton value="back" handleSubmit={this.props.handleSubmit} />
          <MyButton value="dusk" handleSubmit={this.props.handleSubmit} />
          <MyButton value="clear" handleSubmit={this.props.handleSubmit} />
          <MyButton value="vibrant" handleSubmit={this.props.handleSubmit} />
          <MyButton value="sundown" handleSubmit={this.props.handleSubmit} />
          <MyButton value="us" handleSubmit={this.props.handleSubmit} />
        </ButtonToolbar>
      </div>
    );
  }
}

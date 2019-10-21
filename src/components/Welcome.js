import React from "react";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import MyButton from "./MyButton";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default class Welcome extends React.Component {
  render() {
    return (
      <Container className="paddedContainer welcome">
        <Image src={require("../thumb.jpg")} className="float-left" />
        <div style={{ float: "right" }}>
          <MyButton value="about" handleSubmit={this.props.handleSubmit}>
            about
          </MyButton>
        </div>
        <div
          style={{
            height: "30vh"
          }}
        />
        <h1 className="display-1">welcome </h1>
        <h1 className="display-5">please select a gallery</h1>
        <ButtonToolbar className="welcome">
          <MyButton value="mist" handleSubmit={this.props.handleSubmit} />
          <MyButton value="dusk" handleSubmit={this.props.handleSubmit} />
          <MyButton value="clear" handleSubmit={this.props.handleSubmit} />
          <MyButton value="vibrant" handleSubmit={this.props.handleSubmit} />
          <MyButton value="sundown" handleSubmit={this.props.handleSubmit} />
          <MyButton value="us" handleSubmit={this.props.handleSubmit} />
        </ButtonToolbar>
      </Container>
    );
  }
}

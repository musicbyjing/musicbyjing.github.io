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
          <MyButton value="back" handleSubmit={this.props.handleSubmit} />
        </div>
        <div
          style={{
            height: "30vh"
          }}
        />
        <h1 className="display-1">hi, i'm jing </h1>
        <p className="lead">
          and I'm just another kid in this world trying to make a difference.
          I'm passionate about problem-solving, the great outdoors, and space
          exploration. I'm trying to learn, grow, break my limits, and reach for
          the stars. Maybe quite literally.
          <br />
          Thanks for coming to my site, and I hope you'll stay a while.
          <br />
        </p>
      </Container>
    );
  }
}

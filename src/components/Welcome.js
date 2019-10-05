import React from "react";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import MyButton from "./MyButton";
import Button from "react-bootstrap/Button";

export default class Welcome extends React.Component {
  render() {
    return (
      <Container className="paddedContainer">
        <Button variant="link" className="link float-right">
          why teal?
        </Button>
        <Button variant="link" className="link float-right">
          about
        </Button>
        <div
          style={{
            height: "30vh"
          }}
        />
        <h1 className="display-1">welcome </h1>
        <h1 className="display-5">please select a gallery</h1>
        <ButtonToolbar>
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

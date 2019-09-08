import React from "react";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import MyButton from "./MyButton";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gallery: 0 }; // 0 indicates the "homepage"
  }

  onSubmit(value) {
    console.log(value);
  }

  render() {
    return (
      // <div class="container padding block">
      <Container>
        <h1 className="display-3">welcome.</h1>
        <p className="lead">
          Please select a mood:
          <br />
          <ButtonToolbar>
            <MyButton value="Mist" onSubmit={this.onSubmit} />
            <MyButton value="Dusk" onSubmit={this.onSubmit} />
          </ButtonToolbar>
        </p>
      </Container>
    );
  }
}

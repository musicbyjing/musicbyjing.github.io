import React from "react";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import MyButton from "./MyButton";

export default class Welcome extends React.Component {
  // constructor(props) {
  // super(props);
  // this.state = { gallery: this.props.gallery };
  // }

  render() {
    return (
      // <div class="container padding block">
      <Container>
        <h1 className="display-3">welcome.</h1>
        <p className="lead">
          Please select a mood:
          <br />
          <ButtonToolbar>
            <MyButton value="Mist" handleSubmit={this.props.handleSubmit} />
            <MyButton value="Dusk" handleSubmit={this.props.handleSubmit} />
          </ButtonToolbar>
        </p>
      </Container>
    );
  }
}

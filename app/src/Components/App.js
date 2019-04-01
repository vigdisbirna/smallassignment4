import React, { Component } from "react";
import "../App.css";

import Modal from "./Modal/Modal";
import Row from "./Row/Row";
import Col from "./Col/Col";
import DatePicker from "./DatePicker/DatePicker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.onCloseHandler = this.onCloseHandler.bind(this);
  }

  onCloseHandler() {
    this.setState({ isOpen: false });
  }

  onOpen(e) {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div className="App">
        <button onClick={e => this.onOpen(e)}>Show Modal</button>
        <Modal isOpen={this.state.isOpen} onClose={this.onCloseHandler}>
          <Modal.Title>My Modal Title</Modal.Title>
          <Modal.Body>My Modal Body</Modal.Body>
          <Modal.Footer>
            <div>
              <button>Cancel</button>
              <button>Continue</button>
            </div>
          </Modal.Footer>
        </Modal>

        <div>
          <Row>
            <Col size={6}>Hi</Col>
            <Col size={2}>ble</Col>
            <Col size={8}>dkfj</Col>
          </Row>
          <Row>
            <Col>kj</Col>
          </Row>
          <DatePicker />
        </div>
      </div>
    );
  }
}

export default App;

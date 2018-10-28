import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import logo from './imags/logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main"></div>

        <Grid>
        <Row>
            <Col xs={12} md={12}>
              <div id="logo"></div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Button type="button" className="btnType" id="desayuno"> </Button>
            </Col>
            <Col xs={6} md={6}>
              <Button type="button" className="btnType" id="almuerzo"> </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Button type="button" className="btnType" id="cena"> </Button>
            </Col>
            <Col xs={6} md={6}>
              <Button type="button" className="btnType" id="antojo"> </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

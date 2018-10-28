import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Panel, FormControl, Button, Table
} from 'react-bootstrap';
import './Results.css';
import  trash from "./imags/basura.png";

class Results extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            preIngredients: "",
            cantidad: "",
            medition: "",
            ingredients: []
        };
    }

    render() {
        return (
            <div className="App">
                <div id="logo" href="/"></div>
                <Grid fluid>
                    <Row>
                        <Col md={12} xs={12}>
                            <img href="http://confuciomag.com/wp-content/uploads/2017/03/39_gastronomia_wuhan_01.jpg"></img>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Results;

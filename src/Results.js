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
                <Grid>
                    <Row>
                        <Col md={3} xs={12}>
                            <div>
                                <Panel>
                                    <Panel.Heading>Panel heading without a title</Panel.Heading>
                                    <Panel.Body><a href="/Recipe">Link</a></Panel.Body>
                                </Panel>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Results;

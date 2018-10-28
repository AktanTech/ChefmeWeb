import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Panel, FormControl, Button, Table
} from 'react-bootstrap';
import './Results.css';
import  HotCackes from "./imags/hot-cakes.jpg";

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
                                    <img src={HotCackes}></img>
                                    <Panel.Body><a href="/Recipe/HotCackes"><b>Hot Cakes</b></a></Panel.Body>
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

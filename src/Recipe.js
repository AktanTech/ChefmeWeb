import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Panel, FormControl, Button, Table
} from 'react-bootstrap';
import './Recipe.css';
import  HotCakes from "./imags/hot-cakes.jpg";

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
                <Grid fluid>
                    <Row>
                        <Col md={12} xs={12}>
                            <img src={HotCakes} id="foto"></img>
                            
                            <h3>Ingredientes</h3> 
<p>Rinde: 12 hot cakes <br></br>
 3 huevos<br></br>
 1 taza de hojuelas de avena<br></br>
 1 taza de queso cottage<br></br>
 1 plátano<br></br>
 1 sobrecito de substituto de azúcar (opcional)<br></br>
Modo de preparación<br></br>
Preparación: 5min  ›  Cocción: 15min  ›  Listo en:20min <br></br>
1. Coloca los huevos, avena, queso, plátano y substituto de azúcar
en el vaso de la licuadora. Licua hasta que la avena se haya
molido completamente y tengas una masa homogénea.<br></br>

2. Calienta un comal antiadherente a fuego medio-alto. Pon 1/4
taza de la masa por cada hot cake en el comal. Cocina hasta
que se formen burbujas en la superficie, voltea y cocina del otro
lado hasta que tome un tono café dorado.
3. Coloca los hot cakes en un plato y cúbrelos con papel aluminio
para que se sigan cociendo mientras terminas con los demás.
4. Sírvelos calientes con mantequilla y miel.<br></br>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Results;

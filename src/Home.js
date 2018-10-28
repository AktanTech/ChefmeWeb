import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, FormControl, Button, Table
} from 'react-bootstrap';
import './Home.css';
import  trash from "./imags/basura.png";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            preIngredients: "",
            cantidad: "",
            medition: "",
            ingredients: []
        };
    }



    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async () => {
        var data = {
            ingredients: this.state.preIngredients,
            cantidad: this.state.cantidad + ' ' + this.state.medition
        }
        this.state.ingredients.push(data)
        this.setState({ preIngredients: "", cantidad: "" })
    }
    handleDelete = (key) => {
        var array = [...this.state.ingredients]
        array.splice(key, 1)
        this.setState({ingredients: array})

    }

    handleSend = () => {
        if(this.state.ingredients.length >= 2 && this.state.ingredients.length < 20){
            this.props.history.push('/Results')
        
        if(this.state.ingredients.length<2)
            alert('Ingredientes Insuficientes!!')
        }
        else{
            alert('Demasiados Ingredientes!!')
        }
    }

    render() {
        return (
            <div className="App">
                <div id="main"></div>
                <div id="logo" href="/"></div>
                <div className="input-ingredient">
                    <Grid>
                        <Row>
                            <form>
                                <Col xs={8} md={5}>
                                    <FormGroup bsSize="large">
                                        <FormControl
                                            type="text"
                                            value={this.state.preIngredients}
                                            placeholder="Enter your ingredient"
                                            onChange={this.handleChange}
                                            name="preIngredients"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col xs={4} md={2}>
                                    <FormGroup bsSize="large">
                                        <FormControl
                                            type="text"
                                            value={this.state.cantidad}
                                            placeholder="Cuantity"
                                            onChange={this.handleChange}
                                            name="cantidad"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col xs={4} md={2}>
                                    <FormGroup bsSize="large">
                                        <FormControl componentClass="select" placeholder="Medition" name="medition" onChange={this.handleChange} value={this.state.medition}>
                                            <option value="kg">kg</option>
                                            <option value="gr">gr</option>
                                            <option value="lt">lt</option>
                                            <option value="ml">ml</option>
                                            <option value="pzs">pzs</option>
                                        </FormControl>
                                    </FormGroup>
                                </Col>
                                <Col xs={4} md={3}>
                                    <Button type="button" bsSize="large" onClick={() => this.handleSubmit()} >Add Ingredient</Button>
                                </Col>
                            </form>
                        </Row>
                    </Grid>
                </div>
                <div className="send">
                    <Grid id="menu">
                        <img src="https://enlacocina.telemesa.es/wp-content/uploads/2018/01/men%C3%BA.png" width="200px"></img>
                        <Table responsive>
                            <tbody>
                                {this.state.ingredients.map((element,key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{element.ingredients}</td>
                                            <td>{element.cantidad}</td>
                                            <td><a onClick={() => this.handleDelete(key)}><img src={trash}></img></a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Grid>
                    <br></br>
                    <Button type="button" bsSize="large" onClick={() => this.handleSend()}>Search Recipe</Button>
                </div>
            </div>
        );
    }
}

export default Home;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Results from './Results';
import Recipe from './Recipe';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component = {App} />
          <Route path='/Home/:type' exact component = {Home} />
          <Route path='/Results' exact component = {Results} />
          <Route path='/Recipe/:id' exact component = {Recipe} />
        </Switch>
      </BrowserRouter>, 
    document.getElementById('root')
    );
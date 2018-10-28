import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
// import * as serviceWorker from './serviceWorker';kk 

ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component = {App} />
          <Route path='/Home' exact component = {Home} />
        </Switch>
      </BrowserRouter>, 
    document.getElementById('root')
    );
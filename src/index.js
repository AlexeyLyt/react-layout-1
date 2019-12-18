import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import FormLayout from './components/Task2/FormLayout'

import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/t" component={FormLayout} />
      </div>
    </Router>
  )

// import Routes from './router';

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

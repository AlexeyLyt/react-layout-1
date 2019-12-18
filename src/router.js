import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import CryptoList from './CryptoList';  // or whatever the location is
// import Currency from './Currency'; // or whatever the location is

import Navigation from './components/TaskMain/Navigation'
import Calc from './components/TaskExample/Calc'

export default () => (
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Navigation}/>
      <Route path="/about" component={Calc}/>
    </Switch>
</BrowserRouter>
);
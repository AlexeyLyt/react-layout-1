import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import FormLayout from './components/Task2/FormLayout'
import InteractiveMap from './components/Task3/InteractiveMap'

export const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/form-layout" component={FormLayout} />
      <Route path="/interactive-map" component={InteractiveMap} />
    </div>
  </Router>
)

// export const routing = [
//   {
//     path: '/',
//     component: App,
//     title: 'Главная страница'
//   },
//   {
//     path: '/t',
//     component: FormLayout,
//     title: 'Чекбоксы'
//   }
// ]

export default routing;
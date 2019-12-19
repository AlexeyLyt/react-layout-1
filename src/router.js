import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import FormLayout from './components/Task2/FormLayout'

export const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/t" component={FormLayout} />
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
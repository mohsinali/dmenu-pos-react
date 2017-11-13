import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import TableNumber from './components/TableNumber';

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={TableNumber} exact={true} />
      <Route path='/dashboard' component={Dashboard} />
    </div>
  </BrowserRouter>
)

// const template = <p>This is my first.</p>;
// const template = React.createElement('p', {}, 'Testing');
ReactDOM.render(routes, document.getElementById('app'));
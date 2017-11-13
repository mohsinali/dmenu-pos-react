import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import TableNumber from './components/TableNumber';


const NotFoundPage = () => {
  return (
    <div>
      <h1>404!</h1>
    </div>
  )
}

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={TableNumber} exact={true} />
      <Route path='/dashboard' component={Dashboard} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

// const template = <p>This is my first.</p>;
// const template = React.createElement('p', {}, 'Testing');
ReactDOM.render(routes, document.getElementById('app'));
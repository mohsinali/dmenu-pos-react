import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import TableNumber from '../components/TableNumber';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404!</h1>
    </div>
  )
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={TableNumber} exact={true} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;


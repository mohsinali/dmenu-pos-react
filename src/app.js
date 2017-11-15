import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import TopNav from './components/TopNav';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(<TopNav />, document.getElementById('top-nav'));
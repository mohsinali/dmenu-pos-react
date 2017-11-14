import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import LeftNav from './components/LeftNav';
import MainHeader from './components/MainHeader';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(<LeftNav />, document.getElementById('left-nav'));
ReactDOM.render(<MainHeader />, document.getElementById('main-header'));
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';

console.log('Using React');

// const template = <p>This is my first.</p>;
// const template = React.createElement('p', {}, 'Testing');
ReactDOM.render(<Dashboard />, document.getElementById('app'));
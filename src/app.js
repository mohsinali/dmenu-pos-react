import React from 'react';
import ReactDOM from 'react-dom';

console.log('Using React');

const template = <p>This is my first.</p>;
// const template = React.createElement('p', {}, 'Testing');
ReactDOM.render(template, document.getElementById('app'));
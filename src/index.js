console.log('hello world');
console.log("i am chat");
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';

//ReactDOM.render(React.createElement(App), document.querySelector('#root')); также для себя оставлю.
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.querySelector('#root'));
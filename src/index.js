console.log('hello world');
console.log("i am chat");
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import './index.css';
import { store } from './components/Redux/store';

import { App } from './components/App/App';

ReactDOM.render(
    <BrowserRouter>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </BrowserRouter>,
    document.querySelector('#root')
);
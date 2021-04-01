console.log('hello world');
console.log("i am chat");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import { store } from './redux/store';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';

//ReactDOM.render(React.createElement(App), document.querySelector('#root')); также для себя оставлю.
ReactDOM.render(
    <BrowserRouter>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </BrowserRouter>
    , document.querySelector('#root')
);
console.log('hello world');
console.log("i am chat");
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './components/App/App.jsx'; Импор по умолчанию
//import {App} from './components/App/App.jsx'; Первый вариат записи импорта
//Второй вариант просто указание папки, где будет искаться файл с расширением .jsx
import { App } from './components/App';

//ReactDOM.render(React.createElement(App), document.querySelector('#root')); также для себя оставлю.
ReactDOM.render(<App />, document.querySelector('#root'));
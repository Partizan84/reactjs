console.log('hello world');
console.log("i am mashine");
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    //return React.createElement('div', {id: 'Test-id'}, 'Reaction from React'); для себя оставлю комментарий.
    return <div id='test-id'>Hello from React!!!</div>;
};

//ReactDOM.render(React.createElement(App), document.querySelector('#root')); также для себя оставлю.
ReactDOM.render(<App />, document.querySelector('#root'));
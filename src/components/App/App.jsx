import React from 'react';
import { Component } from 'react';
import { Messages } from '../Messages';

class App extends Component {
    state = {
        count: 0,
        demo: 1,
    };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div id='test-id'>
                <h2>Hell from React!!!</h2>
                <Messages messages={['First message.', 'Second message.', 'Three message.']} />
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        );
    }
}
//const App = () => {
//return React.createElement('div', {id: 'Test-id'}, 'Reaction from React'); для себя оставлю комментарий.
//    return (
//        <div id='test-id'>
//            <h2>Hell from React!!!</h2>
//            <Messages messages={['First message.', 'Second message.', 'Three message.']} />
//        </div>
//    );
//};
//export default App; для себя оставлю. Вариант по умолчанию
export { App };
import React from 'react';
import { Component } from 'react';
import { Messages } from '../Messages';

class App extends Component {
    state = {
        count: 0,
        isShowMessages: true,
    };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    toggleMessages = () => {
        this.setState({ isShowMessages: !this.state.isShowMessages });
    }

    render() {
        return (
            <div id='test-id'>
                <h2>Hell from React!!!</h2>
                <button onClick={this.toggleMessages}>Toggle Messages</button>
                {/* Терная операция, скрытие содержимого
                {this.state.isShowMessages ? (
                    <Messages
                        messages={['First message.', 'Second message.', 'Three message.']}
                        count={this.state.count}
                        handleClick={this.handleClick}
                    />
                ) : null} */}
                {/*Логическая операция И (&&) скрытия содержимого при нажатии на кропку*/}
                {this.state.isShowMessages && (
                    <Messages
                        messages={['First message.', 'Second message.', 'Three message.']}
                        count={this.state.count}
                        handleClick={this.handleClick}
                    />
                )}
            </div>
        );
    }
}
//<button onClick={this.handleClick}>{this.state.count}</button>
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
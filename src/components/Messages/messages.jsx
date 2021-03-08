import { Component, Fragment } from 'react';
//import { NamedModulesPlugin } from 'webpack';
import PropTypes from 'prop-types';

class Messages extends Component {

    state = {
        messages: [
            { text: 'Hello world', author: 'Human' },
            { text: 'How are you?', author: 'Human' },
        ],
    };

    addMessage = () => {
        this.setState({ messages: [...this.state.messages, { text: 'Whassap?', author: 'Human' }] });
    };

    componentDidUpdate() {
        console.log('Запуск компоненты обновления');
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, { text: 'I am Mashine', author: 'Robot' }],
                });
            }, 1000);
        }
    };

    render() {
        console.log('render', this.state);
        const { messages = [] } = this.state;

        return (
            <Fragment>
                <div className='messages'>
                    {messages.map((item, index) => (
                        <Message
                            key={index}
                            text={item.text}
                            author={item.author}
                        />
                    ))}
                </div>

                <button onClick={this.addMessage}>Отправить сообщение</button>
            </Fragment>
        );
    }
}


//const Message = (props) => {
//    return (
//        <div className='my-class'>
//            <div>{props.text}</div>
//            <div>{props.author}</div>
//        </div>
//    );
//};

export { Messages };
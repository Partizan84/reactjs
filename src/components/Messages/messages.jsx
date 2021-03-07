import { Component, Fragment } from 'react';
//import { NamedModulesPlugin } from 'webpack';
import PropTypes from 'prop-types';

class Messages extends Component {

    state = {
        messages: ['Hello world', 'How are you?'],
        msg: [{ author: 'Назаров Константин', robot: 'T-800' }],
    };

    addMessage = () => {
        this.setState({ messages: [...this.state.messages, 'Whassap?'] });
    };

    componentDidUpdate() {
        console.log('Запуск компоненты обновления');
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, 'I am Mashine'],
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
                        <Message key={index} text={item} />
                    ))}
                </div>

                <button onClick={this.addMessage}>Отправить сообщение</button>
            </Fragment>
        );
    }
}

//Парамент функции Message - props (свойства) принимает свойство text из App.jsx передает своё значение My new message
const Message = (props) => {
    return <div className='my-class'>{props.text}</div>;
};

export { Messages };
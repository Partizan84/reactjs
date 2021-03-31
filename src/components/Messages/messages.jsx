import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { Message } from './Message';

//import './Message.css';

//const styles = {
//    root: {
//        color: 'red',
//        height: '480px',
//        padding: '0 30px',
//    },
//};

class Messages extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
    };

    state = {
        messages: {
            0: [
                { text: 'Hello world', author: 'Human' },
                { text: 'How are you?', author: 'Human' },
            ],
            1: [],
            2: [{ text: 'Это Чат 2.', author: 'Human' }],
            3: [],
        },
        textMessage: '',
    };

    fieldRef = createRef();

    addMessage = (msg = '', author = '') => {
        const chatId = this.props.currentChat;
        const prevMessages = this.state.messages[chatId] || [];

        this.setState({
            messages: {
                ...this.state.messages,
                [chatId]: [
                    ...prevMessages,
                    {
                        text: msg.length ? msg : this.state.textMessage,
                        author: author.length ? author : 'Human',
                    },
                ],
            },
            textMessage: '',
        });
    };

    componentDidUpdate(_, prevState) {
        console.log('Запуск компоненты обновления');
        const chatId = this.props.currentChat;

        if (
            prevState.messages[chatId]?.length !==
            this.state.messages[chatId]?.length &&
            this.state.messages[chatId].length % 2 === 1
        ) {
            setTimeout(() => {
                this.addMessage('I am Mashine', 'Robot');
            }, 1000);
        }
        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    render() {
        const { messages = {} } = this.state;
        const chatId = this.props.currentChat;

        console.log('Messages, render', chatId);

        return (
            <div className='message-field'>
                {
                    this.props.currentChat && (
                        <>
                            <div className='messages' ref={this.fieldRef}>
                                {messages[chatId] && messages[chatId].map((item, index) => (
                                    <Message key={index} {...item} />
                                ))}
                            </div>
                            <div className='message-new'>
                                <TextField
                                    className='text-field'
                                    value={this.state.textMessage}
                                    label='Новое сообщение'
                                    onChange={(event) =>
                                        this.setState({
                                            textMessage: event.target.value,
                                        })
                                    }
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            this.addMessage();
                                        }
                                    }}
                                />
                                <IconButton
                                    color='primary'
                                    variant='contained'
                                    onClick={this.addMessage}
                                >
                                    <Icon>send</Icon>
                                </IconButton>
                            </div>
                        </>
                    )
                }
            </div>
        );
    }
}

export { Messages };
import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Message } from './Message';

import './Message.css';

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

    addMessage = () => {
        const { currentChat } = this.props;

        this.setState({
            messages: {
                ...this.state.messages,
                [currentChat]: [
                    ...this.state.messages[currentChat],
                    { text: this.state.textMessage, author: 'Human' },
                ],
            },
            textMessage: '',
        });
    };

    componentDidUpdate(_, prevState) {
        console.log('Запуск компоненты обновления');
        const { currentChat } = this.props;

        if (
            prevState.messages[currentChat].length !==
            this.state.messages[currentChat].length &&
            this.state.messages[currentChat].length % 2 === 1
        ) {
            setTimeout(() => {
                this.setState({
                    messages: {
                        ...this.state.messages,
                        [currentChat]: [
                            ...this.state.messages[currentChat],
                            { text: 'I am Mashine', author: 'Robot' },
                        ],
                    },
                    textMessage: '',
                });
            }, 1000);
        }
        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    render() {
        const { messages = [] } = this.state;
        const { currentChat } = this.props;
        console.log('Messages, render', currentChat);

        return (
            <div className='message-field'>
                {
                    currentChat && (
                        <>
                            <div className='messages' ref={this.fieldRef}>
                                {messages[currentChat] && messages[currentChat].map((item, index) => (
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
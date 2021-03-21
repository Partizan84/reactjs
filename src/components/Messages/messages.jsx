import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';

import { Message } from './Message';

import './Message.css';

class Messages extends Component {
    state = {
        messages: [
            { text: 'Hello world', author: 'Human' },
            { text: 'How are you?', author: 'Human' },
        ],
        textMessage: '',
    };

    fieldRef = createRef();

    addMessage = () => {
        this.setState({
            messages: [
                ...this.state.messages,
                { text: this.state.textMessage, author: 'Human' },
            ],
            textMessage: '',
        });
    };

    componentDidUpdate() {
        console.log('Запуск компоненты обновления');

        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        { text: 'I am Mashine', author: 'Robot' },
                    ],
                });
            }, 1000);
        }
        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    render() {
        const { messages = [] } = this.state;
        console.log('Messages, render');

        return (
            <div className='message-field'>
                <div className='messages' ref={this.fieldRef}>
                    {messages.map((item, index) => (
                        <Message key={index} {...item} />
                    ))}
                </div>
                <div className='message-new'>
                    <TextField
                        className="text-field"
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
            </div>
        );
    }
}

export { Messages };
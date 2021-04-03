import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import { sendMessage } from '../Redux/Actions/messagesActions';
import { Message } from './Message';

class _Messages extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        textMessage: '',
    };

    fieldRef = createRef();

    addMessage = (msg = '', author = '') => {
        const chatId = this.props.currentChat;
        const newMessage = msg.length ? msg : this.state.textMessage;
        const currentAuthor = author.length ? author : 'Human';

        (msg.length || this.state.textMessage) &&
            this.props.sendMessage(newMessage, currentAuthor, chatId);

        this.setState({
            textMessage: '',
        });
    };

    componentDidUpdate(prevProps) {
        console.log('Запуск компоненты обновления');
        const chatId = this.props.currentChat;

        if (
            prevProps.messages[chatId]?.length !==
            this.props.messages[chatId]?.length &&
            this.props.messages[chatId].length % 2 === 1
        ) {
            setTimeout(() => {
                this.addMessage('I am Mashine', 'Robot');
            }, 1000);
        }
        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    render() {
        const { messages = {}, currentChat: chatId } = this.props;
        //const chatId = this.props.currentChat;

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

const mapStateToProps = (state) => ({
    messages: state.chat.messages,
});

//const mapDispatchToProps = (dispatch) =>
//  bindActionCreators({ sendMessage }, dispatch);

//const Messages = connect(mapStateToProps, mapDispatchToProps)(_Messages);
const Messages = connect(mapStateToProps, { sendMessage })(_Messages);

export { Messages };
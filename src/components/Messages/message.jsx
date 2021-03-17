const Message = (props) => {
    return (
        <div className={`message ${props.author === 'Human' ? 'message-mine' : ''}`}>
            <div className='message__text'>{props.text}</div>
            <div className='message__author'>{props.author}</div>
        </div>
    );
};
export { Message };
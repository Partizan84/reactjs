import './message.css';

const Message = (props) => {
    return (
        <div className='message' /*style={mainStyle}*/>
            <div className='message__text'>{props.text}</div>
            <div className='message__author'>{props.author}</div>
        </div>
    );
};
export { Message };

//const mainStyle = {
//    marginTop: '10px',
//    backgroundColor: 'greenyellow',
//};
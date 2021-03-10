import './message.css';

const Message = (props) => {
    return (
        <div className='my-class' style={mainStyle}>
            <div>{props.text}</div>
            <div>{props.author}</div>
        </div>
    );
};
export { Message };

const mainStyle = {
    marginTop: '10px', backgroundColor: 'greenyellow'
};
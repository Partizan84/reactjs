const Message = (props) => {
    return (
        <div className='my-class'>
            <div>{props.text}</div>
            <div>{props.author}</div>
        </div>
    );
};
export { Message };
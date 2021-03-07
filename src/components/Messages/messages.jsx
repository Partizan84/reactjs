import { Component, Fragment } from 'react';

class Messages extends Component {
    render() {
        const { messages = [], count, handleClick } = this.props;

        return (
            <Fragment>
                <div className='messages'>
                    {messages.map((item, index) => (
                        <Message key={index} text={item} />
                    ))}
                </div>

                <button onClick={handleClick}>{count}</button>
            </Fragment>
        );
    }
}
//const Messages = (props) => {
//    const { messages = [] } = props;
//    return (
//        <div className='messages'>
//            {messages.map((item, index) => (
//                <Message key={index} text={item} />
//            ))}
//        </div>
//    );
//};

//Парамент функции Message - props (свойства) принимает свойство text из App.jsx передает своё значение My new message
const Message = (props) => {
    return <div className='my-class'>{props.text}</div>;
};

export { Messages };
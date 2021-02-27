import React from 'react';

const Messages = (props) => {
    const {messages = []} = props;

    return <div className='messages'>
        {messages.map((item, index) => (
            <div key={index}>{item}</div>
        ))}
    </div>
}

//Парамент функции Message - props (свойства) принимает свойство text из App.jsx передает своё значение My new message
const Message = (props) => {
    return <div className='my-class'>{props.text}</div>;
};

export {Messages};
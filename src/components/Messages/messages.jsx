//import React from 'react'; можно не использовать,
//если есть настройка в конфиге ключ у '@babel/preset-react' - "runtime: 'automatic'"

const Messages = (props) => {
    const {messages = []} = props;

    return (
        <div className='messages'>
            {messages.map((item, index) => (
                <Message key={index} text={item} />
            ))}
        </div>
    );
};

//Парамент функции Message - props (свойства) принимает свойство text из App.jsx передает своё значение My new message
const Message = (props) => {
    return <div className='my-class'>{props.text}</div>;
};

export {Messages};
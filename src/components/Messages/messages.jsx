import { Component, Fragment } from 'react';
//import { NamedModulesPlugin } from 'webpack';
import PropTypes from 'prop-types';

class Messages extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
        count: PropTypes.number,
        handleClick: PropTypes.func,
    };
    //Один из вариантов записи переменных по умолчанию
    //static defaultProps = {
    //    messages: [],
    //};

    state = {
        intervalId: null,
    };

    componentDidMount() {
        console.log('componentDidMount');
        const id = setInterval(() => {
            console.log('hello from interval');
        }, 1000);
        this.setState({ intervalId: id });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.state.intervalId);
    }

    render() {
        console.log('render', this.propsnpm);
        //Один из вариатов задачи переменных по умолчанию
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
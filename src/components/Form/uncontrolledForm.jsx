import { Component, createRef } from 'react';

class UncontrolledForm extends Component {
    userRef = createRef(); // Стуктура являющаяся объектом, у которого есть ключ current,
    // дефолтное значение имеет null - {current:null}
    messageRef = createRef(); // Ref работает только с классом, в хуки используется useRef()

    handleSend = () => {
        const userName = this.userRef.current.value;
        const message = this.messageRef.current.value;
        console.log({ userName, message });
    };

    componentDidMount() {
        this.userRef.current.focus();
    }

    render() {
        return (
            <div>
                <input name='username' ref={this.userRef} />
                <input name='message' ref={this.messageRef} />
                <button onClick={this.handleSend}>Отправить</button>
            </div >
        );
    }
}
export { UncontrolledForm };
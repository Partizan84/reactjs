import { Component } from 'react';

class Form extends Component {
    state = {
        message: '',
        username: '',
    };
    // Объект event. Через event.target можно получить информацию (атрибуты,..)
    // об элементе, с которым работаем
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    name='message'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}
export { Form };
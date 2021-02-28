import React from 'react';
import {Messages} from '../Messages';

const App = () => {
    //return React.createElement('div', {id: 'Test-id'}, 'Reaction from React'); для себя оставлю комментарий.
    return <div id='test-id'>
        <h2>Hell from React!!!</h2>
        <Messages messages={['First message.', 'Second message.', 'Three message.']}/>
        {/*<Message text="My two message."/> */}
    </div>;
};
//export default App; для себя оставлю. Вариант по умолчанию
export { App };
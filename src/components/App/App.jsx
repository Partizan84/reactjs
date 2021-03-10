import { Messages } from '../Messages';
import { Form, UncontrolledForm } from '../Form';

function App() {
    console.log('Hell from React');
    return (
        <div>
            <Form />
            {/* <Messages /> */}
            <UncontrolledForm />
        </div>
    );
}

export { App };
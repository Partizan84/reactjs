import { useRef } from 'react';
import { Messages } from '../Messages';
import { Form, UncontrolledForm } from '../Form';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

function App() {
    const messageTextFieldRef = useRef();

    console.log(messageTextFieldRef);

    console.log('Hell from React');

    return (
        <div>
            {/*<Form />*/}
            {/*<UncontrolledForm />*/}
            <Messages />
            <div>
                <TextField label="Outlined" variant="outlined" inputRef={messageTextFieldRef} />
                <Button
                    color='primary'
                    variant='contained'
                    startIcon={<Icon>ArrowForward</Icon>}
                    endIcon={<AddIcon />}
                >
                    Отправить
                </Button>
            </div>
        </div>
    );
}

export { App };
import { createStore } from 'redux';
import reducers from './Reducers';

const initialState = {
    chat: {
        messages: {
            0: [{ text: 'Hello from store.js', author: 'Robot' }]
        },
    },
};

const store = createStore(reducers, initialState);

export { store };

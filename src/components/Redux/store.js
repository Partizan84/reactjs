import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers';

const initialState = {
    chat: {
        messages: {
            0: [{ text: 'Hello from store.js', author: 'Robot' }]
        },
    },
};

const store = createStore(
    reducers,
    initialState,
    //windows.__REDUX_DEVTOOLS_EXTENSION__ && windows.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(),
);

export { store };

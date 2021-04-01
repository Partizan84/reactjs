import { SEND_MESSAGE } from '../Actions/messagesActions';

const initialState = {};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const prevMessages = state.messages[action.payload.chatId] || [];
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...prevMessages,
                        {
                            text: action.payload.text,
                            author: action.payload.author,
                        },
                    ],
                },
            };
        }
        default:
            return state;
    }
};
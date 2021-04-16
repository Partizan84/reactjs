import { SEND_MESSAGE } from '../Actions/messagesActions';
import { ADD_CHAT } from '../Actions/chatActions';

const initialState = {
    chats: ['Чат 1', 'Чат 2', 'Чат 3', 'Чат 4'],
    messages: {
        0: [
            { text: 'Привет мир', author: 'Human' },
            { text: 'Прекрасный мир', author: 'Human' },
        ],
        1: [{ text: 'Привет! Вы находитесь во втором чате!', author: 'Human' }],
        2: [{ text: 'Привет! Вы находитесь в третьем чате!', author: 'Human' }],
        3: [{ text: 'Привет! Вы находитесь в четвертом чате!', author: 'Human' }]
    },
};

export default function chatReducer(store = initialState, action) {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...store,
                chats: [...store.chats, action.payload.title],
            };
        }
        case SEND_MESSAGE: {
            const { chatId, text, author } = action.payload;
            const prevMessages = store.messages[chatId] || [];
            return {
                ...store,
                messages: {
                    ...store.messages,
                    [chatId]: [
                        ...prevMessages,
                        { text, author },
                    ],
                },
            };
        }
        default:
            return store;
    }
}
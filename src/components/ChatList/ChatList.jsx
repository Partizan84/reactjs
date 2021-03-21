import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import './ChatList.css';

const chats = ['Чат 1', 'Чат 2', 'Чат 3', 'Чат 4'];

const ChatList = () => {
    return (
        <div className='chat-list'>
            <List>
                {chats.map((chat) => (

                    <ListItem button>
                        <ListItemIcon>
                            <Send />
                        </ListItemIcon>
                        <ListItemText primary={chat} />
                    </ListItem>

                ))}
            </List>
        </div>
    );
};

export { ChatList };
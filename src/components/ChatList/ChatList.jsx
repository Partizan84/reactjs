import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import './ChatList.css';

const chats = ['Chat 1', 'Chat 2', 'Chat 3', 'Chat4'];

const ChatList = () => {
    return (
        <div className='chat-list'>
            <List>
                {chats.map((chat, index) => (
                    //<Link key={index} to={`/chat/${index}`}>
                    <ListItem button>
                        <ListItemIcon>
                            <Send />
                        </ListItemIcon>
                        <ListItemText primary={chat} />
                    </ListItem>
                    //</Link>
                ))}
            </List>
        </div>
    );
};

export { ChatList };
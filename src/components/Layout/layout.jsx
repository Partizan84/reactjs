import { Messages } from '../Messages';
import { ChatList } from '../ChatList';
import './Layout.css';

const Layout = () => {
    return (
        <div className='chat-layout'>
            <ChatList />
            <Messages />
        </div>
    );
};
export { Layout };

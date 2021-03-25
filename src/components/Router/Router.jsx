import { Switch, Route } from 'react-router-dom';
import { Layout } from '../Layout';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/profile" />
            <Route exact path="/chats" />
        </Switch>
    );
};

export { Router };
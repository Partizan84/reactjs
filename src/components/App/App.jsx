import { Header } from '../Header';
import { Router } from '../Router';

function App() {
    console.log('Hell from React');
    return (
        <div style={appStyle}>
            <Header />
            <Router />
        </div>
    );
}

export { App };

const appStyle = {
    margin: '10px auto',
    maxWidth: '900px',
};
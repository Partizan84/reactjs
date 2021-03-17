import { Layout } from '../Layout';
import { Header } from '../Header';

function App() {
    console.log('Hell from React');
    return (
        <div style={appStyle}>
            <Header />
            <Layout />
        </div>
    );
}

export { App };

const appStyle = {
    margin: '10px auto',
    maxWidth: '900px',
};
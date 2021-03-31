import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <span>Болталка 3021</span>
            <div className='menu'>
                <Link to='/' className='menu-item'>
                    Чаты
                </Link>
                <Link to='/profile' className='menu-item'>
                    Profile
                </Link>
            </div>
        </header>
    );
};

export { Header };
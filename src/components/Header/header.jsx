import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.css';

const _Header = ({ userName }) => {
    return (
        <header className='header'>
            <span>Болталка 3021</span>
            {userName ? <div>{userName}</div> : null}
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

_Header.propTypes = {
    userName: PropTypes.string,
}

const mapStateToProps = (state) => ({
    userName: state.profile.UserName,
});

const Header = connect(mapStateToProps)(_Header);

export { Header };
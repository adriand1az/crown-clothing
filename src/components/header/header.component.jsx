// External
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

// Styles
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';

// Components
import {auth} from '../../firebase/firebase.utils';
import CartIcon from'../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

function Header ({currentUser}){
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link to='/shop' className='options'> SHOP</Link>
            </div>
            <div className="options">
                <Link to='/contact' className='options'> CONTACT</Link>
                {
                    currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </div>
                    ) : (
                    <Link className='option' to='/signin'>
                    SIGN IN
                    </Link>
                    )}
                    <CartIcon/>
            </div>
            <CartDropdown />
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
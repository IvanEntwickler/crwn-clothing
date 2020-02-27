import React, {useContext, useState} from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import CurrentUserContext from '../../context/currentUserContext/currentUserContext.context';
import CartContext from '../../context/cartContext/cart.context';


import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = () =>{

const[hidden, setHidden] = useState(true);
const toggleHidden = () => setHidden(!hidden);

const currentUser = useContext(CurrentUserContext);
return(
        <div className='header'>
            <Link className='logo-container' to="/" >
                <Logo className='logo' />
            </Link>
            <div className='options' >
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {currentUser ? (
                    <div 
                    className='option' 
                    onClick={() => auth.signOut()}>
                    SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                    SIGN IN
                    </Link>
                )}
                <CartContext.Provider value={{hidden, toggleHidden}}>
                    <CartIcon/>
                </CartContext.Provider>
            </div>
            {hidden ? 
            null : <CartDropdown/> }
        </div>
    );
}




export default Header;
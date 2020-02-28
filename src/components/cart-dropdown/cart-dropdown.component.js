import React, {useContext} from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {CartContext} from '../../Providers/cart/cart.provider';


const CartDropdown = ({ history}) => {

    const {cartItems, toggleHidden} = useContext(CartContext);
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.length ? (
            cartItems.map(cartItem =>(
                <CartItem key={cartItem.id} item={cartItem} />
            ))
        ) : (
            <span className='empty-message'>Your cart is empty</span>
        )}
        </div>
        <div onClick= {toggleCartHidden}>
            <CustomButton onClick= {()=>{
                history.push('/checkout');
                toggleHidden();
                }}>
                GO TO CHECKOUT 
            </CustomButton>
        </div>
    </div>
);
}





export default withRouter(CartDropdown);
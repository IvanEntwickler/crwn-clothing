import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';


const CartDropdown = ({cartItems, history, dispatch}) => (
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
                dispatch(toggleCartHidden());
                }}>
                GO TO CHECKOUT 
            </CustomButton>
        </div>
    </div>
);



const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
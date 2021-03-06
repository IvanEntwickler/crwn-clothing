import React, {useContext} from 'react';
import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {CartContext} from '../../Providers/cart/cart.provider';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import StripeButton from '../../components/stripe-button/stripe-button.component';


const CheckoutPage = () => {
const{cartItems, total} = useContext(CartContext);

    return(

        <div className= 'checkout-page'>
            <div className= 'checkout-header'>
                <div className= 'header-block'>
                    <span>Product</span>
                </div>
                <div className= 'header-block'>
                    <span>Description</span>
                </div>
                <div className= 'header-block'>
                    <span>Quantity</span>
                </div>
                <div className= 'header-block'>
                    <span>Price</span>
                </div>
                <div className= 'header-block'>
                    <span>Remove</span>
                </div>
                
            </div>
        
                {cartItems.map(cartItem =>(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))}
            <div className='total'> 
                <span>TOTAL: {total} €</span>
            </div>
            <div className='text-warning'>
                *Please use the following test credit card for payments*
                    4242 4242 4242 4242 - Exp:01/21 - CW:123
            </div>
            <StripeButton price={total}/>
        </div> 
    );
}

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems, 
    total: selectCartTotal,
});


export default connect(mapStateToProps)(CheckoutPage);
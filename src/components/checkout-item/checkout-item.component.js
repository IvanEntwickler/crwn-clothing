import React from 'react';
import './checkout-item.styles.scss';

import {connect} from 'react-redux';
import {addItem, decreaseItem, removeItem} from '../../redux/cart/cart.actions';






const CheckoutItem = ({cartItem, removeItem, addItem, decreaseItem}) => {
    const { imageUrl, price, name, quantity } = cartItem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>

        <span className='quantity'>
            <div onClick={()=> decreaseItem(cartItem)} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div onClick={()=> addItem(cartItem)} className='arrow'>&#10095;</div>
        </span>

        <span className='price'>{price}</span>
        <div onClick={()=> removeItem(cartItem)} className='remove-button'>&#10005;</div>
    </div>
    );
};


const mapDispatchToProps = dispatch =>({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
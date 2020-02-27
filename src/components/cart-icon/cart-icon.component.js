import React, {useContext} from 'react';
import './cart-icon.styles.scss';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import CartContext from '../../context/cartContext/cart.context';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({itemCount}) => {
    const {toggleHidden} = useContext(CartContext);

    return(
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> {itemCount} </span>
        </div>
    );
};

    
    
    const mapStateToProps = createStructuredSelector ({
        itemCount: selectCartItemsCount
    });

export default connect(mapStateToProps)(CartIcon);


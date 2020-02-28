import React, {createContext, useState, useEffect} from 'react';

import {addItemToCart, decreaseItemFromCart, removeItemFromCart, displayItemCount} from './cart.utils';



export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    decreaseItem: () => {},
    removeItem: () => {},
    displayItemCount: () =>{},
    cartItemCount: 0,
    total: null
});

const CartProvider = ({children}) =>{
    const[hidden, setHidden] = useState(true);
    const[cartItems, setCartItems] = useState([]);
    const[cartItemCount, setCartItemCount] = useState(0);
    const[total, setTotal] = useState(null);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const decreaseItem = item => setCartItems(decreaseItemFromCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    
    useEffect(() =>{
        setCartItemCount(displayItemCount(cartItems))
    }, [cartItems])


    return(
        <CartContext.Provider
        value={{
            hidden,
            cartItems,
            cartItemCount,
            toggleHidden,
            addItem,
            decreaseItem,
            removeItem,
            total
        }}
        >
            {children}
        </CartContext.Provider>
    );
    
}

export default CartProvider;
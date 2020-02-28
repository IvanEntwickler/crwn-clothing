export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    
    if (existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]

};

export const decreaseItemFromCart = (cartItems, cartItemToDecrease) =>{
    const cartItemInCart = cartItems.find(
        cartItem => cartItem.id === cartItemToDecrease.id
    );


if (cartItemInCart.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id)
}

return cartItems.map(cartItem => 
    cartItem.id === cartItemToDecrease.id 
    ?{...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
);

}

export const removeItemFromCart = (cartItems, item) => cartItems.filter(cartItem => cartItem.id !== item.id);

export const displayItemCount = (cartItems) => cartItems.reduce((accumalatedQuantity, cartItem) => 
accumalatedQuantity + cartItem.quantity, 0);
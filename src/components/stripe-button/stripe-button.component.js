import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_WvxSuCe4H3tcUdlGXdif5UHa006OwBPbm4';


    const onToken = token =>{
        console.log(token);
        alert('Payment Sucessful!');
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name= 'CRWN-CLOTHING GmBH'
        billingAddress
        shippingAddress
        currency='EUR'
        image='https://sendeyo.com/up/d/f3eb2117da'
        description= {`Your total price is ${price}€`}
        amount={priceForStripe}
        panelLabel= 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        
        />
    );
        
};

export default StripeButton;
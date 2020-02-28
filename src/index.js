import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import CartProvider from './Providers/cart/cart.provider';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
    <CartProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </CartProvider>,
    document.getElementById('root')
);

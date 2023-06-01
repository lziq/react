import React from 'react';

const CartContext = React.createContext({
    items: [], 
    totalNum: 0, 
    totalAmount: 0.0, 
    addItem: (item) => {}, 
    removeItem: (id) => {}, 
}); 

export default CartContext; 
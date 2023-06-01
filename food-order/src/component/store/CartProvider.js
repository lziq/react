import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
    const items = state.items; 
    const totalNum = state.totalNum; 
    const totalAmount = state.totalAmount; 

    switch (action.type) {
        case "ADD":
            const index = items.findIndex(i => i.id === action.item.id); 

            if (index === -1){
                items.push(action.item)
            } else {
                items[index].amount += action.item.amount; 
            }
    
            return {
                items: [...items], 
                totalNum: totalNum + action.item.amount, 
                totalAmount: totalAmount + action.item.amount * action.item.price, 
            }; 
        case "REMOVE":
            const item = items.find(i => i.id === action.id); 
            const itemAmount = item.amount; 
            item.amount = Math.max(0, itemAmount - 1); 
    
            return {
                items: [...items], 
                totalNum: totalNum - 1, 
                totalAmount: totalAmount - item.price, 
            }; 
        default:
            
      }
}; 

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer, 
        { items: [], totalNum: 0, totalAmount: 0.0 }
    ); 

    return (
        <CartContext.Provider value={{
            items: cartState.items, 
            totalNum: cartState.totalNum, 
            totalAmount: cartState.totalAmount, 
            addItem: (item) => dispatchCartAction({ type: 'ADD', item: item }), 
            removeItem: (id) => dispatchCartAction({ type: 'REMOVE', id: id }), 
        }}>
            {props.children}
        </CartContext.Provider>
    ); 
}; 

export default CartProvider; 
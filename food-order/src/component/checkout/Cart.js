import { useContext } from 'react';
import CartContext from '../store/cart-context';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const onCancelHandler = (event) => {
        event.preventDefault();
        props.cancelCheckout();
    };

    return (
        <form>
            <ul className={styles['cart-items']}>
                {cartContext.items
                    .filter(item => item.amount > 0)
                    .map(item => {
                        return <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                            addItem={cartContext.addItem}
                            removeItem={cartContext.removeItem}
                        />
                    })}
            </ul>
            <div className={styles.total}>
                <p>Total Amount</p>
                <p>${parseFloat(cartContext.totalAmount).toFixed(2)}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={onCancelHandler}>Close</button>
                {cartContext.totalNum > 0 && <button>Order</button>}
            </div>
        </form>
    );
};

export default Cart; 
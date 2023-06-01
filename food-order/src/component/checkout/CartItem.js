import styles from "./CartItem.module.css";

const CartItem = (props) => {
    const minusHandler = (event) => {
        event.preventDefault();
        props.removeItem(props.id);
    }
    const plusHandler = (event) => {
        event.preventDefault();
        props.addItem({
            id: props.id, 
            name: props.name, 
            price: props.price, 
            amount: 1, 
        });
    }; 

    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.summary}>
                    <p className={styles.price}>${props.price}</p>
                    <p className={styles.amount}>x {props.amount}</p>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={minusHandler}>-</button>
                <button onClick={plusHandler}>+</button>
            </div>
        </li>
    )
}

export default CartItem; 
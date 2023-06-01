import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const inputRef = useRef(); 
    const cartContext = useContext(CartContext); 

    const submitHeandler = (event) => {
        event.preventDefault();

        const amount = inputRef.current.value; 
        if (amount.length === 0 || amount <= 0 || amount > 5){
            return; 
        }

        cartContext.addItem({
            id: props.id, 
            name: props.name, 
            price: props.price, 
            amount: +amount, 
        }); 
    }; 

    const input_id = "amount_" + props.id; 

    return (
        <form onSubmit={submitHeandler} className={styles.form}>
            <div className={styles.input}>
                <label
                    htmlFor={input_id}
                >Amount: </label>
                <input 
                    id = {input_id}
                    type = "number" 
                    min = "1"
                    max = "5"
                    step = "1"
                    defaultValue = "1"
                    ref={inputRef}
                />
            </div>
            <button type="submit">+Add</button>
        </form>
    );
}

export default MealItemForm; 

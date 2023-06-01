import styles from './MealItem.module.css';
import MealItemForm from './MealitemForm';

const MealItem = (props) => {
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.price}>${props.price}</p>
            </div>
            <MealItemForm
                key={props.id}
                id={props.id}
                name={props.name}
                description={props.description}
                price={props.price}
            />
        </li>
    );
}; 

export default MealItem; 
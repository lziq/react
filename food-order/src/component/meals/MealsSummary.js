import Card from '../UI/Card';
import styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <Card className={styles.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>Choose your favorite meal from our broad selection of avilable meals and enjoy a delivious lunch or dinner at home. </p>
            <p>All our meals are cooked with high-qualify ingredients, just-in-time and of course by experienced chefs!</p>
        </Card>
    ); 
}

export default MealsSummary; 
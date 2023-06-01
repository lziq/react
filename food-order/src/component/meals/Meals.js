import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"

const Meals = (props) => {
    return (
        <>
            <MealsSummary />
            <AvailableMeals meals={props.meals} addMeals={props.addMeals} />
        </>
    ); 
}

export default Meals; 
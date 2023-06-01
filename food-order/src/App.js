import Header from './component/header/Header';
import Meals from './component/meals/Meals'; 
import Modal from './component/checkout/Modal';
import { useState } from 'react';
import CartProvider from './component/store/CartProvider';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.50,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function App() {
  const [checkedout, setCheckedout] = useState(false); 
  const checkout = () => { setCheckedout(true) }
  const cancelCheckout = () => { setCheckedout(false) }

  const [meals, setMeals] = useState(
    DUMMY_MEALS.map(meal => {
      return {
        ...meal, 
        count: 0, 
      }
    })
  ); 
  const removeOneMeal = (mealId) => {
    const meal = meals.filter(meal => meal.id === mealId)[0]; 
    if (meal.count > 0){
      meal.count--; 
    }
    setMeals([...meals]); 
  }; 
  const addOneMeal = (mealId) => {
    meals.filter(meal => meal.id === mealId)[0].count++; 
    setMeals([...meals]); 
  }; 
  const addMeals = (mealId, num) => {
    meals.filter(meal => meal.id === mealId)[0].count += num; 
    setMeals([...meals]); 
  }; 

  return (
    <CartProvider>
      {checkedout && <Modal cancelCheckout={cancelCheckout} addOneMeal={addOneMeal} removeOneMeal={removeOneMeal} meals={meals} />}
      <Header checkout={checkout} meals={meals} />
      <Meals meals={meals} addMeals={addMeals}/>
    </CartProvider>
  );
}

export default App;

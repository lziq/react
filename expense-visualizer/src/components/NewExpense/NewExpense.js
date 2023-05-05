import { useState } from 'react';
import ExpenseForm from './ExpenseForm'; 
import './NewExpense.css'; 

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false); 

    return (
        <div className='new-expense'>
            {!showForm && 
                <div className='new-expense__actions' style={{textAlign: 'center'}}>
                    <button type='submit' onClick={() => {setShowForm(true)}}>Add Expense</button>
                </div>
            }
            {showForm && <ExpenseForm onAddExpense={props.onAddExpense} hideForm={() => {setShowForm(false)}}/>}
        </div>
    ); 
}

export default NewExpense; 
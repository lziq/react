import './Expenses.css'; 
import Card from '../UI/Card'; 
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpenseChart'; 
import { useState } from 'react';
import ExpensesList from './ExpensesList';

export default function Expenses (props){
    const expenses = props.expenses; 

    const [yearFilter, setYearFilter] = useState('2020'); 
    const onSelectYear = (year) => {
      setYearFilter(year); 
    }; 
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === yearFilter); 

    return (
      <div>
        <Card className='expenses'>
          <ExpensesFilter defaultYear={yearFilter} onSelectYear={onSelectYear}/>
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
          <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
      </div>
    );
}

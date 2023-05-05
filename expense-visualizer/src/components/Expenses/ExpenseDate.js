import './ExpenseDate.css'; 

export default function ExpenseDate(props){
    const year = props.date.getFullYear(); 
    const month = props.date.toLocaleString('en-US', { month: 'long' }).substring(0, 3); 
    const day = props.date.toLocaleString('en-US', { day: '2-digit' }); 

    return (
        <div className="expense-date">
            <div className="expense-date__month">{year}</div>  
            <div className="expense-date__year">{day}</div>    
            <div className="expense-date__day">{month}</div>  
        </div>
    )
}
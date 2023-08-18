import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';
const ExpenseItem = props => {
    // const expenseDate = '2023/08/15';
    // const expenseTitle = 'School Fee';
    // const expenseAmount = '2899 ETB';


    return <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>

    </Card>
}

export default ExpenseItem;
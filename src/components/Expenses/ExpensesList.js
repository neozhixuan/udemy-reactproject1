import './ExpensesList.css'
import ExpenseItem from './ExpenseItem.js'

const ExpensesList = (props) => {
    if (props.item.length === 0){
        return (<h2 className = "expenses-list__fallback"> No content found. </h2>)
    }

    return <ul className = "expenses-list">
      {props.item.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
    
}

export default ExpensesList;

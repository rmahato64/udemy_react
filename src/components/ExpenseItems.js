import './ExpenseItem.css'

function ExpensesItem (){
    return(
        <div className="expense-item">
            <div>11.09.2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">294.55 €</div>
            </div>


        </div>
    )
}

export default ExpensesItem;
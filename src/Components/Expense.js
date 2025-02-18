import { InnerLayout } from '../styles/Layouts';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { calender, rupee, trash } from '../utils/icons';
import { dateFormat } from '../utils/dateFromat';
import ExpenseForm from './ExpenseForm';

const Expense = () => {

    const { expenses, getExpenses, deleteExpense, totalExpense } = useContext(GlobalContext)

    useEffect(() => {
        getExpenses()
    }, [])

    return (
        <div className='income-div'>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className='tot-inc'>Total Expenses: <span>{totalExpense()}</span></h2>
                <div className='income-container'>
                <div className='row'>
                    <div className='col-lg-4' width="20%"> 
                        <div className='income-content'>
                            <ExpenseForm />
                        </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='incomes'>
                            {expenses.map(expense =>
                                <div className="content">
                                    <h3>{expense.category}</h3>
                                    <h6>{expense.title}</h6>
                                    <div className="inner-content">
                                        <div className="text">
                                            <p>{rupee} {expense.amount}</p>
                                            <p>{calender} {dateFormat(expense.date)}</p>
                                            <p>{expense.description}</p>
                                            <button type="submit" className='btn-income'
                                                onClick={() => deleteExpense(expense._id)}
                                            >{trash}</button>
                                        </div>
                                        
                                        </div>
                                    </div>

                            )}
                            
                        </div>
                        </div>
                   
                    
                </div>

                </div>

            </InnerLayout>
        </div>
    )
}


export default Expense
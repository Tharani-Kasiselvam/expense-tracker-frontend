import { InnerLayout } from '../styles/Layouts';
import Chart from './Chart';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import History from './History';

const Dashboard = () => {

    const { getIncomes, getExpenses, incomes, expenses, totalIncome, totalExpense, totalBalance } = useContext(GlobalContext)

    useEffect(()=>{
        getIncomes()
        getExpenses()
    },[])

    return (
        <div>
            <InnerLayout>
                <h1>Dashboard</h1>
                <div className='container' id='stats-con'>
                    <div className='row'>
                    <div className='col-lg-7' style={{marginTop:'2rem'}}>
                    <div className='chart-con'>
                        <Chart />
                        </div>
                        <div className='amount-con' >
                            <span style={{display:'flex', gap:'2rem'}}>
                                <div className='income'>
                                <h4>Total Income : </h4>
                                <p>Rs. {totalIncome()}</p>
                            </div>
                            <div className='expense'>
                                <h4>Total Expense : </h4>
                                <p>Rs. {totalExpense()}</p>
                            </div>
                            </span>
                            <div className='balance'>
                                <h4>Total Balance : </h4>
                                <p>Rs. {totalBalance()}</p>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-5'>
                    <div className='history-con'>
                        <History />
                        <h2 className='salary-title'>Min <span>Income</span>Max</h2>
                        <div className='salary-item'>
                            <p>
                                ${Math.min(...incomes.map((inc) => inc.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map((inc) => inc.amount))}
                            </p>
                        </div>
                        <h2 className='salary-title'>Min <span>Expense</span>Max</h2>
                        <div className='salary-item'>
                            <p>
                                Rs.{Math.min(...expenses.map((exp) => exp.amount))}
                            </p>
                            <p>
                                Rs.{Math.max(...expenses.map((exp) => exp.amount))}
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}


export default Dashboard
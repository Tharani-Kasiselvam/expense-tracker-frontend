import { InnerLayout } from '../styles/Layouts';
import FormComponent from './FormComponent';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { calender, rupee, trash } from '../utils/icons';
import { dateFormat } from '../utils/dateFromat';

const Income = () => {

    const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useContext(GlobalContext)

    useEffect(() => {
        getIncomes()
    }, [])

    return (
        <div className='income-div'>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className='tot-inc'>Total Income: <span>{totalIncome()}</span></h2>
                <div className='income-container'>
                <div className='row'>
                    <div className='col-lg-4' width="20%"> 
                        <div className='income-content'>
                            <FormComponent />
                        </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='incomes'>
                            {incomes.map(income =>
                                <div className="content">
                                    <h3>{income.category}</h3>
                                    <h6>{income.title}</h6>
                                    <div className="inner-content">
                                        <div className="text">
                                            <p>{rupee} {income.amount}</p>
                                            <p>{calender} {dateFormat(income.date)}</p>
                                            <p>{income.description}</p>
                                            <button type="submit" className='btn-income'
                                                onClick={() => deleteIncome(income._id)}
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


export default Income
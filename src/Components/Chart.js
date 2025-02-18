import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'
import { useContext, useEffect } from 'react'
import {Line} from 'react-chartjs-2'
import { GlobalContext } from '../context/GlobalContext'
import { dateFormat } from '../utils/dateFromat'

//register Chart elements
ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

const Chart = () => {

    const {incomes, expenses, getIncomes, getExpenses} = useContext(GlobalContext)

    useEffect(()=>{
        getIncomes()
        getExpenses()
    },[])

    const data = {
        labels : incomes.map((inc)=>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets : [
            {
                label : 'Income',
                data : [
                    ...incomes.map((income)=>{
                    const {amount} = income
                    return amount
                    })
                ],
                backgroundColor : 'green',
                tension : .2
            },
            {
                label : 'Expenses',
                data : [
                    ...expenses.map((expense)=>{
                    const {amount} = expense
                    return amount
                    })
                ],
                backgroundColor : 'red',
                tension : .2
            }
        ]
    }

    return (
        <div className='chart-div'>
            <Line data = {data}/>
        </div>
    )
}

export default Chart
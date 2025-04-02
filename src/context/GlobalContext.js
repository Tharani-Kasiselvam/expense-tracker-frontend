import { createContext, useContext, useState } from "react";
import axios from 'axios'
import { useCallback } from "react";

// const BASE_URL = "http://localhost:5001/app/v1"
const BASE_URL = "https://expense-tracker-backend-ra91.onrender.com/app/v1"

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState("")

    //add Incomes
    const addIncome = async (incomeData) => {

        await axios.post(`${BASE_URL}/add-income`,incomeData)
        .then((res) => {
            console.log("Promise Resposne==>", res.data.message)
        })
        .catch(error => {
            setError(error.response.data.message)
        })
        getIncomes()
    }

    //add Expense
    const addExpense = async (expenseData) => {

        await axios.post(`${BASE_URL}/add-expenses`,expenseData)
        .then((res) => {
            console.log("Expense Promise Resposne==>", res.data.message)
        })
        .catch(error => {
            setError(error.response.data.message)
        })
        getExpenses()
    }


    const getIncomes = useCallback(async () => {
        try {
          const incomeData = await axios.get(`${BASE_URL}/get-incomes`);
          console.log("getIncome", incomeData.data);
          setIncomes(incomeData.data);
        } catch (error) {
          console.error("Error fetching incomes:", error);
        }
      }, []);

    const getExpenses = useCallback(async () => {
        try {
          const expenseData = await axios.get(`${BASE_URL}/get-expense`);
          console.log("getExpenses",expenseData)
          setExpenses(expenseData.data)
        } catch (error) {
          console.error("Error fetching expenses:", error);
        }
      }, []);

    const deleteIncome = async (id) => {
        await axios.delete(`${BASE_URL}/delete-income/${id}`)
        getIncomes()
    }

    const deleteExpense = async (id) => {
        await axios.delete(`${BASE_URL}/delete-expense/${id}`)
        getExpenses()
    }

    const totalIncome = () => {
        let totInc = 0
        incomes.forEach((income)=>{
            totInc = totInc + income.amount
        })
        return totInc
    }

    const totalExpense = () => {
        let totExp = 0
        expenses.forEach((expense)=>{
            totExp = totExp + expense.amount
        })
        return totExp
    }

    const totalBalance = () => {
        const totBal = totalIncome() - totalExpense()
        return totBal
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0,3)
    }

    const allTransactions = () => {
        const alltxns = [...incomes, ...expenses]
        alltxns.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return alltxns
    }

    return <GlobalContext.Provider value = {{addIncome, incomes, getIncomes,deleteIncome, totalIncome, 
        addExpense, expenses, getExpenses, deleteExpense, totalExpense, 
        totalBalance, transactionHistory, allTransactions, error
    }}>
        {children}
    </GlobalContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

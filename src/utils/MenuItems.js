import {dashboard_icon,expense_icon,income_icon,transactions_icon} from './icons'

export const menuItems = [
    {
        id : 1,
        title : 'Dashboard',
        icon : dashboard_icon,
        link : '/dashboard'
    },
    {
        id : 2,
        title : 'View Transaction',
        icon : transactions_icon,
        link : '/transactions'
    },
    {
        id : 3,
        title : 'Incomes',
        icon : income_icon,
        link : '/incomes'
    },
    {
        id : 4,
        title : 'Expenses',
        icon : expense_icon,
        link : '/expenses'
    }
]
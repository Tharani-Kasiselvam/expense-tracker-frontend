import { InnerLayout } from '../styles/Layouts';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { dateFormat } from '../utils/dateFromat';

const Transaction = () => {

    const { allTransactions } = useContext(GlobalContext)

    const [...alltxns] = allTransactions()

    return (
        <div>
            <InnerLayout>
                <h2>All Transactions</h2>
                <div className='txn-cont'>
                    {alltxns.map((item) => {
                        const { _id, title, amount, type, date } = item
                        return (
                            <div className='txn-Items' key={_id}>
                                <p style={{
                                    color: type === 'expense' ? 'red' : 'var(--color-green)'
                                }}>
                                    {dateFormat(date)}
                                </p>
                                <p style={{
                                    color: type === 'expense' ? 'red' : 'var(--color-green)'
                                }}>
                                    {title}
                                </p>
                                <p style={{
                                    color: type === 'expense' ? 'red' : 'var(--color-green)'
                                }}>
                                    {type === 'expense' ? `-${amount}` : `+${amount}`}
                                </p>
                            </div>
                        )
                    })}

                </div>
            </InnerLayout>
        </div>
    )
}

export default Transaction
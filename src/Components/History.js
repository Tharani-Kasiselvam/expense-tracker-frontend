import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


const History = () => {
    const {transactionHistory} = useContext(GlobalContext)

    const [...history] = transactionHistory()

    return (
        <div className="hist-style" style={{marginTop:'-3rem'}}>
            <h2>History Items</h2>
            {history.map((hist)=>{
                const {_id, title, amount, type} = hist

                return (
                    <div className="history_item" key={_id}>
                        <p style = {{
                            color : type === 'expense' ?  'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p style = {{
                            color : type === 'expense' ?  'red' : 'var(--color-green)'
                        }}>
                            {type === 'expense' ? `-${amount}` : `+${amount}`}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default History
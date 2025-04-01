import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb';
import Navigation from './Components/Navigation';
import { useMemo, useState } from 'react';
import Dashboard from './Components/Dashboard';
import Transaction from './Components/Transaction';
import Income from './Components/Income';
import Expense from './Components/Expense';
import './index.css'

function App() {
  const [active, setActive] = useState(1)

  // const {addIncome} = useContext(GlobalContext)
  // console.log(GlobalContext)

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <Income />
      case 4:
        return <Expense />
      default:
        return <Dashboard />
    }

  }

  return (
    <div className="app">
      {orbMemo}
      <MainLayout>
        <div className='container' style={{overflow:"auto"}}>
          <div className='row'>
            <div className='col-lg-3'>
              <Navigation active={active} setActive={setActive} />
            </div>
            <div className='col-lg-9' style={{marginTop:"1px", marginLeft:"-0.5px"}}>
              <main>
                {displayData()}
              </main>
            </div>
          </div>
        </div>
      </MainLayout>

    </div>
  );
}

export default App;

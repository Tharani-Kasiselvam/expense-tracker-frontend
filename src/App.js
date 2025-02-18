import styled from 'styled-components'
import bg from './img/bg.png'
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
    <AppStyled bg={bg} className="App">
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

    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    padding-left : 2rem;

    main{
      flex: 1;
      background: rgba(252, 246, 249, 0.78);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
  `;

export default App;

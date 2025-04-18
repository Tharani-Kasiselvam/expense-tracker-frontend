import styled from 'styled-components'
import avatar from '../img/avatar.png'
import {menuItems} from '../utils/MenuItems'
import { signout_icon } from '../utils/icons'

const Navigation = ({active, setActive}) => {
  
    return(
        <NavStyled>
            <div className='user-con'>
                <img src={avatar} alt="avatar" />
                <div className='text'>
                    <h2>Manoj</h2>
                    <p>My Money</p>
                </div>
            </div>
            <ul className='menu-items'>
                {menuItems.map(item => {
                    return <li 
                                key={item.id}
                                onClick = {() => setActive(item.id)}
                                className={(active === item.id) ?  'active' : ''}
                            >
                        {item.icon}
                        <span> {item.title}</span>
                    </li>
                })}
            </ul>

            <div className='bottom-nav'>
                <li>
                    {signout_icon} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    padding: 2rem 1.5rem;
    width: 250px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
             background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }
    
    .menu-items{
        margin-left : -3rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
      background: linear-gradient(90deg,#b4eed2,#f6d1e8);
      border-radius: 5px;
      text-decoration: underline;
    }
`;

export default Navigation
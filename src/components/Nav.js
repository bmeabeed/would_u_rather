import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
 
  return (
   
    <nav className='nav'>
      <ul>
        <li>
          <NavLink  to='/' exact activeClassName='active'>
             Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            Add Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
          Leader Board
          </NavLink>
        </li>
{props.authedUser === null ?
"" : 
        <li>
           <div className="welcome">
            Hellow {props.authedUser.name}
               <img className="naveLoged" src={props.authedUser.avatarURL} alt={`Avatar of ${props.authedUser.name}`} />
               
               </div>
        </li>
      }

{props.authedUser === null ?
  <li>
          <NavLink to="/login" activeClassName='displed'>
            Login
          </NavLink>
        </li>
         : 
        <li>
          <NavLink to="/logout" activeClassName='displed'>
            Log out
          </NavLink>
        </li>
      
      
      
      }
      </ul>
    </nav>
  )
}
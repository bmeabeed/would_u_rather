import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'

export default function Nav (props) {
 
  return (
   
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/scoreBoard' activeClassName='active'>
            ScoreBoard
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
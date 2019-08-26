import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import About from './About'

export default function Nav() {
  return (
    <Router>
      <div>
     
          <ul>
            <li>
            <Link to='/' component={Home}>Home</Link>
            </li>
            <li>
            <Link to='/about' component={About}>About</Link>
            </li>
            <li>
            <Link to='/users' component={Users}>Users</Link>
            </li>
          </ul>
         
      </div>
    </Router>
  )
}

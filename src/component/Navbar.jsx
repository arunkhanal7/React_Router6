import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  // sinnce there is no contact us it will directly goto error page.
  return (
    <div >
      <ul className='navbar'>
        <li><NavLink className="navbar-link"  to="/about" >About</NavLink></li>
        <li><NavLink className='navbar-link' to="/">Home</NavLink></li>
        <li><NavLink className="navbar-link" to="/contact">Contact</NavLink></li> 
        <li><NavLink className="navbar-link" to="/filter">Filter</NavLink></li> 
        <li><NavLink className="navbar-link" to="/login">Login</NavLink></li> 
        
      </ul>
    </div>
  )
}

export default Navbar
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  // sinnce there is no contact us it will directly goto error page.
  return (
    <div>
      <ul>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
        
      </ul>
    </div>
  )
}

export default Navbar
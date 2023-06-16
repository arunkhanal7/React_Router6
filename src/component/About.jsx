import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
   <h1>This is a About Page</h1> 
   <p>This is the about page of our awesome website.</p>
   <p>And here we are learning react router </p>
   <Link to='/' >Go to Home Page</Link>
   <li><Link to="/user/anil">Anil</Link></li>
        <li><Link to="/user/peter">Peter</Link></li>
    </>
  )
}

export default About
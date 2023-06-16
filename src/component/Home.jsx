import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
   <h1>This is a Home Page</h1> 
   <p>This is the home page of our awesome website.</p>
   <p>And here we are learning react router </p>
   <Link to='/about' >Go to about Page</Link>
    </>
  )
}

export default Home
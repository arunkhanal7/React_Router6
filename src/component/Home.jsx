import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate();
  return (
    <>
   <h1>This is a Home Page</h1> 
   <p>This is the home page of our awesome website.</p>
   <p>And here we are learning react router </p>
   <Link to='/about' >Go to about Page</Link> <br />
   <button onClick={()=>navigate("/about")} >Go to About Page</button><br />
   <button onClick={()=>navigate('/filter')} >Go to Filter Page</button>
    </>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
        <h1>404 page error</h1>
        <p>This URL is not availabale right now.</p>
        <Link to="/" >Return Home page</Link>
    </div>
  )
}

export default Page404
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <h1>Contact US </h1>
    <h2>Here you can contact us through following links.</h2>
    <Link to="socials">Socials</Link> <br />
    <Link to="office">Office</Link>
    <Outlet/>
    </>
  )
}

export default Contact
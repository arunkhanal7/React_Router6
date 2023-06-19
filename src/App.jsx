import React from 'react'
import {BrowserRouter,Routes, Route,Navigate} from 'react-router-dom'; //navigate is used to redirect for any invalid url
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Page404 from './component/Page404';
import Users from './component/Users';
import Filter from './component/Filter';
import Contact from './component/Contact';
import './App.css';
import Socials from './component/Socials';
import Office from './component/Office';
import Login from './component/Login';


 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/about' element={<About/>}/>
        <Route path='/filter' element={<Filter/>} />
        <Route path='/contact/' element={<Contact/>} >
          <Route path='socials' element={<Socials/>} />
          <Route path='office' element={<Office/>} />

        </Route>

        {/* <Route path="/*" element={<Page404/>} /> */}
        <Route path='/user/:name' element={<Users/>} />
        <Route path="/*" element= {<Navigate to="/" />}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
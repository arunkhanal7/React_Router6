import React from 'react'
import {BrowserRouter,Routes, Route,Navigate} from 'react-router-dom'; //navigate is used to redirect for any invalid url
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Page404 from './component/Page404';
import Users from './component/Users';

 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        {/* <Route path="/*" element={<Page404/>} /> */}
        <Route path='/user/:name' element={<Users/>} />
        <Route path="/*" element= {<Navigate to="/" />}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
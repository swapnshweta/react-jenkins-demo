import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes,Link, NavLink } from 'react-router'
import Home from './Component/Home'
import Aboutus from './Component/Aboutus'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import Regi from './Component/Regi'

function App() {
  

  return (
    <>
    
       
      <div>
       <h1>React router </h1>
       </div>
       
        <Link to ="/" >Home</Link>
       <br></br>
       <Link to ="/About" >About</Link> 
       <Link to = "/Login"> Login</Link>
       <br></br>
       <Link to ="/Regi">Regi </Link>
       

{
       <Routes> 
         <Route path ="/" element={<Homeome />}  />
           <Route path ="/Home" element={<Home />}  />
         <Route path ="/About" element={<Aboutus />}  />
          <Route path="/Login" element={<Login name="abc" />}  />
          <Route path = "/Regi" element={<Regi />}/>
       </Routes>  }
    </>
  )
}

export default App

import React from 'react';
import { Route, Routes,Link, NavLink } from 'react-router'



function Navbar() {
    return ( 


        <>
        <Link className = "Link"><h1> Logo  </h1> </Link>
        <Link to ="/" >Home</Link>
        <br></br>
         <Link to ="/About" >About</Link>
        
        
        </>
     );
}

export default Navbar;
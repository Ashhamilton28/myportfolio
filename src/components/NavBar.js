import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../App.css"


function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false)

  return (
    <nav className="navbar" id={expandNavbar ? "open" : "close"}>
      {/* navbarmenu on the side */}
      {/* 
        <div className='changeButton'>
            <button onClick={() =>{setExpandNavbar((howItWasBefore)=> !howItWasBefore)}}>
                
            </button>
        </div> */}
      <div className='nameandlinks'>
        <h1 className='ashley'>ASHLEY</h1>
        <ul className='links'>
          <Link to="/"> Home</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/projects"> Projects</Link>
          <Link to="/contact"> Contact</Link>

        </ul>
      </div>
    </nav>
  )
}

export default NavBar
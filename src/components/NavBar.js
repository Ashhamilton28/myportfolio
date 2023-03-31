import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../App.css"


function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false)

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>


      {/* navbarmenu on the side */}
      {/* 
        <div className='changeButton'>
            <button onClick={() =>{setExpandNavbar((howItWasBefore)=> !howItWasBefore)}}>
                
            </button>
        </div> */}



      <div className='nameandlinks'>
        <div className='ashley'>
        <h1>Ashley</h1>
        </div>
        <div className='links'>
          <Link to="/"> Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects"> Projects</Link>
          <Link to="/contact"> Contact</Link>

        </div>
      </div>
    </div>
  )
}

export default NavBar
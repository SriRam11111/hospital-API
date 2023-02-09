import React from 'react';
import {NavLink} from "react-router-dom"
import "./navbar.css"

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink exact to="/doctors" className="data">Doctors</NavLink>
        <NavLink exact to="/patients" className="data">Patients</NavLink>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className="navbar  navbar-expand-lg navbar-dark bg-dark  p-2" >
  {/* Container wrapper */}
  <div className="container-fluid">
     
    <a class="navbar-brand ms-1 text-uppercase fw-bold " href="#">
       <img src="https://cdn.pixabay.com/photo/2020/04/02/19/11/covid-19-4996393_1280.png" alt="" 
      className=' me-2'
      height={50}
      width={70}
      />
      covid-19
    </a>
    {/* Toggle button */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarRightAlignExample"
      aria-controls="navbarRightAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse " id="navbarRightAlignExample">
      {/* Left links */}
      <ul className="navbar-nav ms-auto pe-3 text-capitalize  fs-5">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home" >     Overview      </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/region" >     Regions  </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/countries" >     Countries     </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/state" >    State     </NavLink>
        </li>   
        <li className="nav-item">
          <NavLink className="nav-link" to="/search" >    Search     </NavLink>
        </li>   
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
  </div>
  {/* Container wrapper */}
</nav>

  )
}

export default Navbar
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavbarContainer, NavLink } from './NavbarStyle'

export default function Navbar () {
  const closeBtn = () =>{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

  return (
    <NavbarContainer id='mySidenav'>
      <nav>
        <NavLink to='/' onClick={closeBtn} className='closebtn'>&times;</NavLink>
        <NavLink to='/About' onClick={closeBtn}>About</NavLink>
        <NavLink to='/Skill' onClick={closeBtn}>Skill</NavLink>
        <NavLink to='/Education' onClick={closeBtn}>Education</NavLink>
        <NavLink to='/Project' onClick={closeBtn}>Project</NavLink>
        <NavLink to='/Contact' onClick={closeBtn}>Contact</NavLink>
      </nav>
      <Outlet />
    </NavbarContainer>
  )
}
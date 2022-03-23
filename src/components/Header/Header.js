import React from 'react';
import { HeaderContainer } from './HeaderStyle';

export const Header = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }


  return (
    <HeaderContainer>
      <div id='main'>
        <span onClick={openNav}>&#9776;</span>
      </div>
    </HeaderContainer>
  )
}
import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../Assets/Me.png'
import HeaderSocial from './Header_Socials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to...</h5>
        <h1>Areeb Khan's Portfolio</h1>
        <h5 className="text-light">Aspiring Undergraduate Student Looking for Internships</h5>
        <CTA/>
        <HeaderSocial/>
      </div>
      <div className="me">
        <img src={Me} alt="me"/>
      </div>
    </header>
  )
}

export default Header

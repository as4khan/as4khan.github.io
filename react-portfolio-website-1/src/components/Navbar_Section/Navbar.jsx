import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {PiSuitcaseSimpleBold} from 'react-icons/pi'
import {useState} from 'react'
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><PiSuitcaseSimpleBold/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className= {activeNav === '#projects' ? 'active' : ''}><AiOutlineProject/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><AiOutlineMail/></a>
    </nav>
  )
}

export default Navbar

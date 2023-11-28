import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">AREEB KHAN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/areeb-safir-khan/"><FaLinkedin/></a>
        <a href="https://github.com/as4khan"><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Areeb Khan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer

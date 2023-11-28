import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Header_Socials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/areeb-safir-khan/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/as4khan' target="_blank"><FaGithub/></a>
    </div>
  )
}

export default Header_Socials

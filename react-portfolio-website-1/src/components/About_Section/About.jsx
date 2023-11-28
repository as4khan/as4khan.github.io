import React from 'react'
import './about.css'
import Me2 from "../../Assets/Robo_Senku.jpg"
import { FaAward } from 'react-icons/fa'
import {BsBookHalf} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      
      <div className='contrainer about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me2} alt="About Image"/>
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>8 Months of Work Experience(2 Co-op Terms)</small>
            </article>
            
            <article className='about__card'>
              <BsBookHalf className='about__icon'/>
              <h5>Education</h5>
              <small>Second Year Electrical Engineering Student</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>Worked on 9 Projects and Counting</small>
            </article>
          </div>
          <p> 
            My name is Areeb Khan, I am an Electrical Engineering student at the University of Waterloo. 
            With two internships under my belt, I am navigating the realms of hardware and software, fueled by a passion for their dynamic interplay. 
            As I stand at the crossroads, my eyes are set on the quantum computing industry, where I aspire to contribute to groundbreaking advancements. 
            Beyond the circuit boards and code, I find joy in anime and video games during my free time, providing a creative escape. 
            Excited about the limitless possibilities in technology, I am on a journey to make meaningful contributions to the ever-evolving landscape of quantum computing. 
            Let's connect and share insights on this incredible path!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

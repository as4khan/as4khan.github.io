import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import logo_1 from "../../Assets/company_logo1.png"
import logo_2 from "../../Assets/company_logo2.png"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Obtained...</h5>
      <h2>My Work Experience</h2>
      <div className="container experience__container">
        <div className="experience__internship_1">
          <h3>Internship #1</h3>
          <img src={logo_1} alt="Company_Logo1"/>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Soldering</h4>
              </div>
            </article>  
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Technical Support</h4>
              </div>
            </article> 
            
            <article className='experience__details'>  
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Electronics Repair</h4>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Microsoft Word/Excel</h4>
              </div>
            </article> 
            
            <article className='experience__details'>  
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Product Testing</h4>
              </div>
            </article>  
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Analytical Skills</h4>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__internship_2">
          <h3>Internship #2</h3>
          <img src={logo_2} alt="Company_Logo2"/>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Documentation</h4>
              </div>
            </article>
            
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Quality Assurance</h4>
              </div>
            </article>
            
            <article className='experience__details'>  
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Product Testing</h4>
              </div>              
            </article>  
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Microsoft Word/Excel</h4>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Analyzing Engineering Drawings</h4>
              </div>
            </article>
            
            <article className='experience__details'>  
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Gage R&R</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

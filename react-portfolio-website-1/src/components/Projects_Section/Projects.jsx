import React from 'react'
import './projects.css'
import IMG1 from '../../Assets/project_images/pokedex.PNG'
import IMG2 from '../../Assets/project_images/robotic_arm.jpg'
import IMG3 from '../../Assets/project_images/wildfire_detection.jpg'
import IMG4 from '../../Assets/project_images/discord_bot.png'
import IMG5 from '../../Assets/project_images/geesespotter.jpg'
import IMG6 from '../../Assets/project_images/checksum.png'
import IMG7 from '../../Assets/project_images/fruitfax.png'
import IMG8 from '../../Assets/project_images/EMC.jpg'
const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item_1'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Web Pokédex</h3>
          <a href="https://github.com/as4khan/Personal-Pokedex-" className='btn' target="_blank">Github</a>
        </article>
        
        <article className='portfolio__item_2'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Robotic Arm</h3>
          <a href="https://github.com/as4khan/Robotic-Arm" className='btn' target="_blank">Github</a>
        </article>
        
        <article className='portfolio__item_3'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Wildfire Prevention System</h3>
          <a href="https://github.com/as4khan/Wildfire-Prevention-System" className='btn' target="_blank">Github</a>
        </article>
        
        <article className='portfolio__item_4'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Discord Bot</h3>
          <a href="https://github.com/as4khan/Discord-Bot" className='btn' target="_blank">Github</a>
        </article>
        
        <article className='portfolio__item_5'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Geesespotter Game</h3>
          <a href="https://github.com/as4khan/GeeseSpotter-Game" className='btn' target="_blank">Github</a>
        </article>
        
        <article className='portfolio__item_6'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>Checksum</h3>
          <a href="https://github.com/as4khan/Checksum" className='btn' target="_blank">Github</a>
        </article>
        
        <article className='portfolio__item_7'>
          <div className='portfolio__item-image'>
            <img src={IMG7} alt="" />
          </div>
          <h3>Fruit-FAX</h3>
          <a href="https://github.com/KaziShaffan/Fruits-FAX" className='btn' target="_blank">Github</a>
        </article>

        <article className='portfolio__item_8'>
          <div className='portfolio__item-image'>
            <img src={IMG8} alt="" />
          </div>
          <h3>Energy Monitoring Controller</h3>
          <a href="https://github.com/as4khan/Energy-Monitoring-Controller" className='btn' target="_blank">Github</a>
        </article>

      </div>
    </section>
  )
}

export default Projects


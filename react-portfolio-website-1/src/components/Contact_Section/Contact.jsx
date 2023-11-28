import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiPhone} from 'react-icons/fi'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t2mg71i', 'template_puaishy', form.current, 'o4nKQ17fmYE6ZxM0s')

    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Let's Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Work Email</h4>
            <h5>areebsafirkhan10@gmail.com</h5>
            <a href='mailto:areebsafirkhan10@gmail.com' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>School Email</h4>
            <h5>as4khan@uwaterloo.ca</h5>
            <a href='mailto:as4khan@uwaterloo.ca' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <FiPhone className="contact__option-icon"/>
            <h4>Phone Number</h4>
            <h5>437-993-1813</h5>
            <a>Give Me A Call</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

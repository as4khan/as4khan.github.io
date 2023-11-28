import React from 'react'
import Header from './components/Header_Section/Header'
import About from './components/About_Section/About'
import Contact from './components/Contact_Section/Contact'
import Experience from './components/Experience_Section/Experience'
import Footer from './components/Footer_Section/Footer'
import Navbar from './components/Navbar_Section/Navbar'
import Projects from './components/Projects_Section/Projects'
const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

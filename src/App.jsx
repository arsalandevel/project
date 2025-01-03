import React from 'react'
import Header from './Components/header/Header'
import Navbar from './Components/navbar/Navbar'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
import Services from './Components/services/Services'
/* import Portfolio from './Componets/portfolio/Portfolio'
import Testomonials from './Componets/testimonial/Testimonials' */
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
   {/*  <Portfolio/>
    <Testomonials/> */}
    <Contact/>
    <Footer/>

    
    
    </>
  )
}

export default App
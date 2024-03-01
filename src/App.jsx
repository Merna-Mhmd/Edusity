import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import Videop from './Components/Video/Videop'
import { useState } from 'react'
const App = () => {
const [playstate,setplaystate]=useState(false);



  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' Title='What We Offer..'/>
      <Program/>
      <About  setplaystate={setplaystate}/>
      <Title subTitle='Gallery' Title='Campus Photos..'/>
    <Campus/>
    <Title subTitle='Testimonials' Title='What  Student says..'/>
    <Testimonials/>

    <Title subTitle='Contact Us' Title='Get in Touch'/>
 
<Contact/>
<Footer/>
      </div>
  <Videop playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )
}

export default App
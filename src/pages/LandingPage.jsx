import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <CTA />
        <Footer />
    </div>
  )
}

export default LandingPage
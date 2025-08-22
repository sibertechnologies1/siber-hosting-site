import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import AboutHero from '../../Components/AboutHero/AboutHero'
import AboutContent from '../../Components/AboutContent/AboutContent'
import MissionVision from '../../Components/MissionVision/MissionVision'
import TeamSection from '../../Components/TeamSection/TeamSection'
import CTASection from '../../Components/CTASection/CTASection'
import Footer from '../../Components/Footer/Footer'



function About() {
  return (
    <div className=' '>
        <Header />
        <Navbar />
      <AboutHero />
      <AboutContent />
      <MissionVision />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default About

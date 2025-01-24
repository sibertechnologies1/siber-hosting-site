import { useState } from 'react'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Pricing from './Components/Pricing/Pricing';
import Experience from './Components/Experience/Experience';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';
import Rating from './Components/Rating/Rating';
import Solution from './Components/Solution/Solution';
import Warrant from './Components/Warrant/Warrant';



function App() {
  
  return (
    <>
      <div>
       
        <Header />
        <Navbar />
        <Hero />
        <Pricing />
        <Experience />
        <NewsLetter />
        <Rating />
        <Warrant />
        <Solution />
        <Footer />
      </div>
      
    </>
  )
}

export default App

import React from 'react'
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Pricing from '../../Components/Pricing/Pricing';
import Experience from '../../Components/Experience/Experience';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Rating from '../../Components/Rating/Rating';
import Solution from '../../Components/Solution/Solution';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Pricing />
      <Experience />
      <NewsLetter />
      <Rating />
      <Solution />
      <Footer />
    </div>
  )
}

export default Home;

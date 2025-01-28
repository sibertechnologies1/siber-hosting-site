import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home/Home.jsx";
import Contact from './Pages/Contact/Contact.jsx';
// import Header from './Components/Header/Header';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// import Pricing from './Components/Pricing/Pricing';
// import Experience from './Components/Experience/Experience';
// import NewsLetter from './Components/NewsLetter/NewsLetter';
// import Footer from './Components/Footer/Footer';
// import Rating from './Components/Rating/Rating';
// import Solution from './Components/Solution/Solution';
// import Warrant from './Components/Warrant/Warrant';



function App() {
  
  return (
    <>
      {/* <div>
       
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
      </div> */}
      
     
       <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
       </Router>
     
      
    </>
  )
}

export default App

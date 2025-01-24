import React from 'react';
import HeroImg from './HeroImg/HeroImg.jpg';




function Hero() {

  return (
    <section className="flex flex-col justify-between my-[7rem] w-full h-full md:flex-row">
      <div className="bg-[#15803d] hero-text md:w-1/2 w-full text-justify p-12">
        <h1 className="my-2 text-2xl font-bold text-white md:text-3xl">
          Fully-Managed SSD <br /> Shared Hosting
        </h1>
        <h5 className='my-3 text-white'>
          The optional solution for fast reliable websites. <br /> 
          Starting at <span className='text-[#fbbf24]'>GH₵ 44.85/mo</span>
        </h5>
        <button className='bg-[#fbbf24] p-2 font-light text-sm hover:bg-[#eab308] transition duration-300'>
          Get Started Now
        </button>
      </div>
      
      <div className="w-full md:w-1/2 heroImg">
        <img src={HeroImg} alt="Hosting service illustration" className='w-full h-auto' />
      </div>
    </section>
  );
}

export default Hero;

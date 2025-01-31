import React from 'react'
import "./Hosting.css";
function HostingHero() {
  return (
    <div className='hero justify-center items-center flex flex-col text-center'>
        <div className=''></div>
      <h1 className=' font-light md:text-6xl sm:text-4xl text-3xl opacity-1 text-white'>Siber Techs Website Builder</h1>
      <p className=' text-white md:text-xl text-lg my-2'>Design Your website with Siber Techs at an Affordable price with our Share Hosting Plans</p>

      <div className="flex gap-4">
        <a href="#" className=' bg-[#15803d]  md:text-2xl text-[#fbbf24] font-semibold px-5 py-2 hover hover:text-[#15803d] hover:bg-[#fbbf24] rounded-full'>Hosting Plans</a>
        <a href="#" className='bg-[#fbbf24] hover:text-  hover:text-[#fbbf24] text-[#15803d] hover:bg-[#15803d]  px-5 py-2 hover rounded-full  md:text-2xl'>Learn More</a>
      </div>
    </div>
  )
}

export default HostingHero

import React from 'react'
import logo from "./HostingBannerImg/logo.png"



function HostingBanner() {
  return (
    <div className='shadow-2xl w-full flex md:flex-row flex-col p-16 justify-center items-center border md:gap-48'>
      <div className="w-full md:w-1/2 flex flex-col ">
      <h1 className=' font-bold text-[#15803d] lg:text-[1.6rem] my-4 md:text-2xl'>Millions of happy customers get better
      website presence with us. You can too.</h1>

      <a href="#" className=' font-bold uppercase text-xl rounded-full w-[12rem] bg-[#fbbf24] text-[#15803d] py-3 px-7'>Start now</a>
      </div>



      <div className="w-full md:w-1/2 flex flex-col my-8">
        <img src={logo} alt="" className='lg:w-1/2 w-full'/>
      </div>
    </div>
  )
}

export default HostingBanner

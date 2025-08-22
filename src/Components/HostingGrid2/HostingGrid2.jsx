import React from 'react'
import GridImg from "./HostingGrid2Img/GridImg.jpg"
function HostingGrid2() {
  return (
    <div className=' md:px-16 px-6 my-20 w-full flex lg:flex-row flex-col gap-16 justify-center items-center'>

   <div className="lg:w-1/2 w-full">
          <h2 className=' font-semibold text-[#fbbf24] md:text-2xl text-xl relative after:block after:w-24 after:h-1 after:bg-[#15803d] after:mx-auto after:mt-1 text-center'>Enhance Your Website with Dynamic Features</h2>
          <p className=' text-gray-400 text-center my-3'>Take your website to the next level with interactive and dynamic elements powered by React.js and Tailwind CSS. We integrate image/video sliders, rich text content, quote sections, social media widgets, and interactive charts to make your site more engaging and functional.

With our expertise, we build feature-rich websites using custom components, including image galleries, videos, audio players, service boxes, Google Maps, contact forms, social media buttons, call-to-action sections, grid galleries, and much more!</p>
        </div>


        
        <div className="lg:w-1/2 w-full">
          <img src={GridImg} alt="" className=' rounded-lg'/>
        </div>
    </div>
  )
}

export default HostingGrid2

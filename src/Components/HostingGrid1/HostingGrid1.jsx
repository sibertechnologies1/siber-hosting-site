import React from 'react'
import GridImg from "./HostingGrid1Img/GridImg.png"
function HostingGrid1() {
  return (
    <div className=' md:px-16 px-6 my-8 w-full flex lg:flex-row flex-col gap-16 justify-center items-center'>

        <div className="lg:w-1/2 w-full">
          <img src={GridImg} alt="" />
        </div>


        <div className="lg:w-1/2 w-full">
          <h2 className=' font-semibold text-[#fbbf24] md:text-2xl text-xl relative after:block after:w-24 after:h-1 after:bg-[#15803d] after:mx-auto after:mt-1 text-center'>Custom-Built Websites for Your Business or Blog</h2>
          <p className=' text-gray-400 text-center my-3'>Looking to create a modern, fast, and responsive website for your business, blog, portfolio, or restaurant? We build professional websites using React.js and Tailwind CSS, ensuring a seamless user experience across all devices.

Our solutions include custom UI components, interactive features, and dynamic designs tailored to your needs. Whether it's an e-commerce store, travel website, or personal blog, we bring your vision to life with clean, maintainable code and cutting-edge technology.</p>
        </div>
    </div>
  )
}

export default HostingGrid1

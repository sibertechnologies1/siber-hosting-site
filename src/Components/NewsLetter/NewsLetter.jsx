import React from 'react'

function NewsLetter() {
  return (
    <div className=' mt-6'>
      <div className="flex flex-col text-center">
        <span className=' text-lg'>Our News Letter</span>
        <h1 className=' md:text-[2rem] sm:text-[1.7rem] text-[1.4rem] font-bold'>Subscribe to Our Newsletter to <br /> Get  <span className=' text-[#15803d] mt-1'>Updates on Our Latest Offers</span></h1>
        <p className=' my-1 text-sm'>Get 25% off on your first order just by subscribing to our newsletter</p>
        <div className="flex gap-1 items-center justify-center ">
           <form action="">
           <input type="email" placeholder=' Enter Email Address' className=' py-2 px-6 m-1 border-2 rounded-full' required/>
           <button type="submit" className=' bg-[#fbbf24] p-2 font-bold rounded-full'>Subscribe</button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter

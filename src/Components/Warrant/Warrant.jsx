import React from 'react'
import {FaCheck} from "react-icons/fa"
function Warrant() {
  return (
    <div className='md:px-12 px-24'>
      <div className=" lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid justify-center items-center">
        <div className="flex gap-2 my-1">
            <FaCheck className=' mt-[0.4rem] text-green-800'/>
            <span> 30-day money-back</span>
        </div>

        <div className="flex gap-2 my-1">
            <FaCheck className=' mt-[0.4rem] text-green-800'/>
            <span>Hassle-free migrations</span>
        </div>

        <div className="flex gap-2 my-1">
            <FaCheck className=' mt-[0.4rem] text-green-800'/>
            <span>99.9% uptime guarantee</span>
        </div>

        <div className="flex gap-2 my-1">
            <FaCheck className=' mt-[0.4rem] text-green-800'/>
            <span> African hosted servers</span>
        </div>


        <div className="flex gap-2 my-1">
            <FaCheck className=' mt-[0.4rem] text-green-800'/>
            <span>Fast & expert support</span>
        </div>


        <div className="flex gap-2 my-1">
            <FaCheck className=' mt-[0.4rem] text-green-800'/>
            <span>24/7 monitoring</span>
        </div>

        <div className="flex gap-2 my-1">
            <FaCheck className=' mt-[0.4rem] text-green-800'/>
            <span>After-hours support</span>
        </div>

        <div className="flex gap-2 my-1">
            <FaCheck className=' mt-[0.4rem] text-green-800'/>
            <span>No contracts</span>
        </div>
      </div>
    </div>
  )
}

export default Warrant

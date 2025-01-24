import React from 'react'
import {AiOutlineGoogle} from "react-icons/ai";
import { SiTrustpilot } from "react-icons/si";
// import Hosting2 from "./RatingImgs/Hosting2.jpg"
import Hosting2 from "./SolutionImg/Hosting2.jpg"
function Solution() {
  return (
   <div className='px-12 my-24 flex flex-col md:flex-row'>


       {/* Image Section */}
       <div className="w-full md:w-1/2 flex justify-center items-center p-4">
         <img src={Hosting2} alt="Hosting" className="object-cover rounded-md" />
       </div>

       <div className="w-full md:w-1/2 flex flex-col p-4">
    
         <h1 className='text-xl font-semibold my-2'>Hosting solutions <span className=' font-light'>for any project</span></h1>
         <p className='text-sm m'>We offer a wide range of hosting solutions to suit your needs and budget. Choose from virtual servers, dedicated servers, domain names, cloud servers, shared hosting and more. Traffic is included in every package, so you will never have any costly surprises. Join us today and see why we're ranked as Ghana's top hosting provider.</p>
 
         <div className="flex flex-col md:flex-row gap-3">
           <a href="#" className='bg-green-800 text-sm rounded-md p-4 text-white font-bold my-3 w-full md:w-auto text-center'>See Hosting Plans ⌄</a>
           <a href="#" className='text-green-800 text-sm font-bold mt-6 w-full md:w-auto text-center'>Speak to an Expert</a>
         </div>
       </div>
 
     </div>
  )
}

export default Solution

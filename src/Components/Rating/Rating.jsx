import React from 'react';
import { FaStar } from "react-icons/fa";
import Hosting1 from "./RatingImgs/Hosting1.jpg"; // Ensure this path is correct

function Rating() {
  return (
    <div className='px-12 mt-6 flex flex-col md:flex-row'>
      <div className="w-full md:w-1/2 flex flex-col p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-row gap-2">
            <FaStar className='text-[#fbbf24] text-xl' />
            <FaStar className='text-[#fbbf24] text-xl' />
            <FaStar className='text-[#fbbf24] text-xl' />
            <FaStar className='text-[#fbbf24] text-xl' />
            <FaStar className='text-[#fbbf24] text-xl' />
          </div>
          <p className="text-sm md:text-base">Rated 4.9 out of 5 - based on 1790 reviews</p>
        </div>

        <h1 className='text-xl font-semibold my-4'>Get world-class hosting & support from Ghana's most trusted hosting provider</h1>
        <p className='text-sm my-4'>Join our 20,000+ customers who enjoy fast hosting and outstanding support. Whether you're new to websites and hosting or a seasoned expert, our support team is ready to help you every step of the way.</p>

        <div className="flex flex-col md:flex-row gap-3">
          <a href="#" className='bg-green-800 text-sm rounded-md p-4 text-white font-bold my-3 w-full md:w-auto text-center'>See Hosting Plans ⌄</a>
          <a href="#" className='text-green-800 text-sm font-bold mt-6 w-full md:w-auto text-center'>Speak to an Expert</a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <img src={Hosting1} alt="Hosting" className="object-cover rounded-md" />
      </div>
    </div>
  );
}

export default Rating;

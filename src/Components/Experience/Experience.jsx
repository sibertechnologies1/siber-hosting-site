import React from 'react'

function Experience() {
  return (
    <div className=' flex flex-col w-full  mt-6 md:px-12'>
         <h2 className='font-bold text-center text-[#15803d] md:text-3xl sm:text-2xl text-xl my-3'>Experience</h2>
             
             <p className='text-center '>Take a look at what people are saying about Siber Techs</p>
        <div className="grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 justify-center gap-3 p-6">
            <div className="flex flex-col  md:text-justify text-center shadow-md p-4">
                <h1 className=' text-[#15803d]    rounded-[100%] p-2 font-bold  text-3xl'>33+</h1>
                <p className=' text-sm'>Apps Developed</p>
            </div>

            <div className="flex flex-col  md:text-justify text-center shadow-md p-4">
                <h1 className=' text-[#15803d]    rounded-[100%] p-2 font-bold  text-3xl'>53+</h1>
                <p className=' text-sm'>Projects Done</p>
            </div>

            <div className="flex flex-col md:text-justify text-center shadow-md p-4">
                <h1 className='text-[#15803d]    rounded-[100%] p-2 font-bold  text-3xl'>23+</h1>
                <p className=' text-sm'>Total Clients</p>
            </div>

            <div className="flex flex-col  md:text-justify text-center shadow-md p-4">
                <h1 className='text-[#15803d]    rounded-[100%] p-2 font-bold  text-3xl'>4+</h1>
                <p className=' text-sm'>Years of Experience</p>
            </div>
        </div>
    </div>
  )
}

export default Experience
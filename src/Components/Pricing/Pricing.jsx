import React from 'react'
import Basic from "./PricingImgs/Basic.png"
import Prof from "./PricingImgs/Prof.png"
import Ult from "./PricingImgs/Ult.png"
import Cop from "./PricingImgs/Cop.png"
function Pricing() {
  return (
    <div>
        <div className="flex flex-col w-full mt-6 md:px-12">
            <h2 className='font-bold text-center text-[#15803d] md:text-3xl sm:text-2xl text-xl my-3'>Cheap Plans We Have Improved</h2>
             
            <p className='text-center '>Get in touch with Siber Techs with  all your website creation and hosting</p>
            
            <div className="flex grid gap-2 items-center justify-center grid-cols-1 p-6 w-[100%] lg:grid-cols-4  sm:grid-cols-2">
                <div className="flex flex-col p-4 shadow basic-plan">
                    <div className="my-4 basicPlan-Img">
                    <img src={Basic} alt="" />
                    </div>
                    <h4 className='my-1 font-bold text-md'>Basic Plan</h4>
                    <p className='my-1 text-xs font-light'>500GB SSD Space</p>
                    <p className='my-1 text-xs font-light'>150GB Bandwith</p>
                    <p className='my-1 text-xs font-light'>Unlimited Hosting Domains</p>
                    <p className='my-1 text-xs font-light'>User-Friendly Access Manager</p>
                     
                     <h2 className='my-3 text-xl font-bold'>GH₵ 59.85/mo</h2>

                     <button className='bg-[#15803d] p-1 rounded-sm my-2 text-center text-white'>Get Started</button>
                </div>


                <div className="flex flex-col p-4 shadow professional-plan">
                    <div className="my-4 prof-Img">
                    <img src={Prof} alt="" />
                    </div>
                    <h4 className='my-1 font-bold text-md'>Professional Plan</h4>
                    <p className='my-1 text-xs font-light'>1TB SSD Space</p>
                    <p className='my-1 text-xs font-light'>300GB Bandwith</p>
                    <p className='my-1 text-xs font-light'>Unlimited Hosting Domains</p>
                    <p className='my-1 text-xs font-light'>User-Friendly Access Manager</p>
                     
                     <h2 className='my-3 text-xl font-bold'>GH₵ 74.85/mo</h2>

                     <button className='bg-[#15803d] p-1 rounded-sm my-2 text-center text-white'>Get Started</button>
                </div>


                <div className="flex flex-col p-4 shadow ultimate-plan">
                    <div className="my-4 ultPlan-Img">
                    <img src={Ult} alt="" />
                    </div>
                    <h4 className='my-1 font-bold text-md'>Ultimate Plan</h4>
                    <p className='my-1 text-xs font-light'>1.5TB SSD Space</p>
                    <p className='my-1 text-xs font-light'>450GB Bandwith</p>
                    <p className='my-1 text-xs font-light'>Unlimited Hosting Domains</p>
                    <p className='my-1 text-xs font-light'>User-Friendly Access Manager</p>
                     
                     <h2 className='my-3 text-xl font-bold'>GH₵ 89.85/mo</h2>

                     <button className='bg-[#15803d] p-1 rounded-sm my-2 text-center text-white'>Get Started</button>
                </div>


                <div className="flex flex-col p-4 shadow corperate-plan">
                    <div className="my-4 copPlan-Img">
                    <img src={Cop} alt="" />
                    </div>
                    <h4 className='my-1 font-bold text-md'>Corperate Plan</h4>
                    <p className='my-1 text-xs font-light'>2TB SSD Space</p>
                    <p className='my-1 text-xs font-light'>600GB Bandwith</p>
                    <p className='my-1 text-xs font-light'>Unlimited Hosting Domains</p>
                    <p className='my-1 text-xs font-light'>User-Friendly Access Manager</p>
                     
                     <h2 className='my-3 text-xl font-bold'>GH₵ 104.85/mo</h2>

                     <button className='bg-[#15803d] p-1 rounded-sm my-2 text-center text-white'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
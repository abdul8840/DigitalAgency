import React from 'react'
import Bimg from '../assets/teamacc.jpg'

const TeamAccBanner = () => {
  return (
    <div className='mt-20 max-w-[1200px] mx-auto p-3'>
      <div className="flex flex-wrap gap-5 items-center justify-center xl:justify-between">
      <div className="">
            <img className='w-[500px] h-[400px] rounded-xl object-cover' src={Bimg} alt="Img" />
        </div>
        <div className="w-full lg:w-1/2">
            <h2 className='text-3xl font-bold'>A Team Dedicated to Transforming Your Digital Footprint</h2>
            <p className='mt-8 text-lg'>At our core, we’re more than just a marketing team—we’re your partners in growth. From brainstorming innovative ideas to executing tailored strategies, each member of our team is dedicated to delivering exceptional results. We understand that every brand has a story, and we’re here to make sure yours stands out in a digital world.</p>
            <p className='mt-8 text-lg'>We’re a passionate team of strategists, creatives, and tech enthusiasts united by a single goal: your brand’s success. Our unique combination of industry knowledge and data-driven insights fuels every decision we make, ensuring that your campaigns are both impactful and targeted. Let’s work together to elevate your brand and reach your audience where they are.</p>
        </div>
        
      </div>
    </div>
  )
}

export default TeamAccBanner

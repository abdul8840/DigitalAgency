import React from 'react'
import Bimg from '../assets/business.jpg'

const Accbanner = () => {
  return (
    <div className='mt-20 max-w-[1200px] mx-auto p-3'>
      <div className="flex flex-wrap gap-5 justify-center xl:justify-between">
        <div className="w-full lg:w-1/2">
            <h2 className='text-3xl font-bold'>Be found, grow, and accelerate business digitally—extensively!</h2>
            <p className='mt-8 text-lg'>In today’s competitive digital landscape, visibility is everything. We help your brand stand out, reaching the right audience with targeted strategies that drive growth and engagement. From search engine optimization and web design to social media marketing and pay-per-click advertising, our comprehensive approach positions your business for success. Let's take your business to new heights by enhancing your digital presence, driving conversions, and ensuring sustainable growth.</p>
        </div>
        <div className="">
            <img className='w-[500px] h-[350px] rounded-xl' src={Bimg} alt="Img" />
        </div>
      </div>
    </div>
  )
}

export default Accbanner 

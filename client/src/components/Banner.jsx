import React from 'react'
import '../index.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 py-[40px]">
        <h2 className='text-xl sm:text-2xl md:text-4xl  text-white font-bold text-center'>Marketing That Speaks to Your Audience</h2>
        <h4 className='text-center mt-2 text-white text-lg sm:text-xl'>"Your Success, Our Mission"</h4>
      </div>
    </div>
  )
}

export default Banner

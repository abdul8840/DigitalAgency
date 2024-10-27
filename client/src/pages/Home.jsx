import React from 'react'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'

const Home = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-3'>
      <Hero />
      <HomeContent />
    </div>
  )
}

export default Home

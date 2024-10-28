import React from 'react'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'
import Services from '../components/Services'
import Banner from '../components/Banner'
import Accbanner from '../components/Accbanner'

const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <hr />
      <HomeContent />
      <Services />
      <Accbanner />
    </div>
  )
}

export default Home

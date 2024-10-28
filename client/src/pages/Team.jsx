import React from 'react'
import TeamHero from '../components/TeamHero'
import TeamBanner from '../components/TeamBanner'
import TeamAccBanner from '../components/TeamAccBanner'
import TeamContent from '../components/TeamContent'

const Team = () => {
  return (
    <div>
      <TeamHero />
      <TeamBanner />
      <TeamAccBanner />
      <TeamContent />
    </div>
  )
}

export default Team
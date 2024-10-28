import React from 'react'
import Passion from '../assets/passion.jpg'
import Leader from '../assets/leader.jpg'
import Expert from '../assets/experience.jpg'

const TeamContent = () => {
    const teamData = [
        {
            img: Expert,
            head: "Experience that Drives Results",
            desc: "Our seasoned team combines years of expertise with a deep understanding of digital trends, delivering strategies that create lasting impact.",
        },
        {
            img: Passion,
            head: "Passion for Your Success",
            desc: "Driven by a genuine commitment to your success, our team infuses passion into every campaign, ensuring impactful results that matter.",
        },
        {
            img: Leader,
            head: "Leadership in Innovation",
            desc: "Guided by leaders in digital innovation, we use creative and cutting-edge approaches to keep your brand ahead in a dynamic market.",
        },
    ]
  return (
    <div className='max-w-[1200px] mx-auto p-3'>
      <h2 className='text-center text-4xl font-bold my-10'>Your Trusted Digital Marketing Team</h2>
      <div className="flex flex-wrap gap-5 justify-center mb-10">
      {teamData.map((item, index) => (
        <div key={index} className='w-[370px] flex flex-col justify-center'>
            <img src={item.img} alt="team" className='w-full h-[270px]' />
            <h3 className='text-xl font-bold mt-2'>{item.head}</h3>
            <p className='text-md'>{item.desc}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default TeamContent

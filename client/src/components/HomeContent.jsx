import React from 'react'
import { IoDiamond } from "react-icons/io5";
import { PiUsersThreeFill } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";

const HomeContent = () => {
    const Ddata = [
        {
            icon: <IoDiamond className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Support brand value",
            desc: "Digital marketing firms assist your company in expanding its reach and making your offerings stand out in a competitive market.",
        },
        {
            icon: <PiUsersThreeFill className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Boost user relationships",
            desc: "Our analytics helps to dig out the crucial and concise user needs and help you target the potential audience on the receiving end.",
        },
        {
            icon: <BsGraphUpArrow className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Drive more traffic",
            desc: "Digital marketing agency helps to propel multiple cross-channel business opportunities to enable exceptional user experience.",
        },
        {
            icon: <GiAchievement className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Stay on top",
            desc: "These marketing services allow you to use multiple channels with a consistent funnel to check for seamless connectivity.",
        },
        {
            icon: <BiBarChartSquare className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Increase in competition",
            desc: "Digital marketing experts help small to mid-sized enterprises to compete head-to-head with multinational firms.",
        },
        {
            icon: <FaCompressArrowsAlt className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Improve conversion rates",
            desc: "Attract numerous leads, businesses, conversions, opportunities, and users to your brand products and services.",
        },
    ]
  return (
    <div className='mt-10 mx-4'>
      <h2 className='text-center text-4xl font-bold'>Why Your Business Needs Digital Marketing Services?</h2>
      <div className="flex flex-wrap gap-5 justify-center mt-10">
        {Ddata.map((item, index) => (
            <div key={index} className="md:w-[370px] w-full flex flex-col text-center gap-3 border-2 border-gray rounded-tr-3xl rounded-bl-3xl py-5 px-8 hover:shadow-xl">
            {item.icon}
            <h2 className='text-2xl font-bold'>{item.head}</h2>
            <p>{item.desc}</p>
        </div>
        ))}
        
        
      </div>
    </div>
  )
}

export default HomeContent

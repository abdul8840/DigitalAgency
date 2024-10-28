import React from 'react'
import '../index.css'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";


const MainServices = () => {
    const Ddata = [
        {
            icon: <HiOutlineDesktopComputer className='text-6xl text-purple-500 hover:text-white' />,
            head: "Web Design",
            desc: <ul className='flex flex-col gap-2 text-start'><li>WordPress Design</li><li>Magento Design</li><li>Shopify Design</li> <li>Custom Development</li><li>Site Maintenance</li></ul>,
            link: "/services/web-design"
        },
        {
            icon: <TbWorldSearch className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Search Engine Optimization",
            desc: <ul className='flex flex-col gap-2 text-start'><li>National SEO</li><li>Technical SEO Audit</li><li>Local SEO</li> <li>Ecommerce SEO</li><li>Franchise SEO</li> <li>Blogging</li></ul>,
            link: "/services/search-engine-optimization"
        },
        {
            icon: <RiAdvertisementFill className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Pay Per Click Advertising",
            desc: <ul className='flex flex-col gap-2 text-start'><li>Ecommerce</li><li>Remarketing</li><li>Facebook Ads</li> <li>Google Ads</li><li>Landing Pages</li></ul>,
            link: "/services/pay-per-click-advertising"
        },
        {
            icon: <MdMarkEmailUnread className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Email & SMS Marketing",
            desc: <ul className='flex flex-col gap-2 text-start'><li>Email Newsletters</li><li>Marketing Automation</li><li>Mailchimp Experts</li> <li>SMS Marketing</li><li>Klaviyo Experts</li></ul>,
            link: "/services/email-and-sms-marketing"
        },
        {
            icon: <MdGroups className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Social Media Marketing",
            desc: <ul className='flex flex-col gap-2 text-start'><li>LinkedIn Management</li><li>Facebook & IG</li><li>Video & TikTok</li> <li>Twitter Management</li><li>Influencer Marketing</li></ul>,
            link: "/services/social-media-marketing"
        },
        
    ]
  return (
    <div className='services mt-20'>
      <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30
">
        <div className="max-w-[1200px] mx-auto p-3">
        <h2 className='text-center text-white text-4xl font-bold mt-5'>Digital Marketing Services</h2>
      <div className="flex flex-wrap justify-center gap-5 mt-10 ">
        {Ddata.map((item, index) => (
            <div key={index} className="w-[300px] flex flex-col text-center gap-3 border-2 border-gray rounded-tr-3xl rounded-bl-3xl py-5 px-8 hover:translate-y-2">
            <div className="flex items-center justify-between mb-2 ">
            {item.icon}
            <h2 className='text-xl text-white font-bold'>{item.head}</h2><hr />
            </div><hr />
            <p className='text-white '>{item.desc}</p>
            <Link to={item.link} className='text-start mt-2 text-lg flex items-center gap-2 text-purple-500 font-semibold'>View More <FaArrowRightLong /></Link>
        </div>
        ))}   
      </div>
        </div>
      </div>
    </div>
  )
}

export default MainServices

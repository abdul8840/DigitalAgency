import React from 'react'
import '../index.css'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { Link } from 'react-router-dom';

const Services = () => {
    const Ddata = [
        {
            icon: <HiOutlineDesktopComputer className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Web Design",
            desc: "Your website is your digital storefront—make it memorable. Our web design services prioritize user experience, mobile responsiveness, and sleek aesthetics to create websites that not only attract visitors but also keep them engaged. From clean, minimalist designs to rich, interactive layouts, we ensure your site truly represents your brand.",
            link: "/services/web-design"
        },
        {
            icon: <TbWorldSearch className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Search Engine Optimization",
            desc: "Be visible where it matters. Our SEO services help your business rank higher on search engines, driving organic traffic and maximizing visibility. Through targeted keyword research, optimized content, and technical SEO enhancements, we help you achieve and maintain top rankings, bringing you closer to your ideal audience.",
            link: "/services/search-engine-optimization"
        },
        {
            icon: <RiAdvertisementFill className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Pay Per Click Advertising",
            desc: "Get instant traffic with tailored PPC campaigns. We create targeted ads that reach the right audience at the right time, maximizing your ad spend and boosting conversions. Whether through Google Ads, Bing, or social platforms, our PPC services ensure every click counts.",
            link: "/services/pay-per-click-advertising"
        },
        {
            icon: <MdMarkEmailUnread className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Email & SMS Marketing",
            desc: "Stay connected with your customers. Our Email and SMS marketing solutions allow you to engage directly with your audience through tailored messages, offers, and updates. Build loyalty, increase brand awareness, and drive consistent engagement with personalized, data-driven campaigns.",
            link: "/services/email-and-sms-marketing"
        },
        {
            icon: <MdGroups className='max-w-full m-auto text-6xl text-purple-500 hover:text-white' />,
            head: "Social Media Marketing",
            desc: "Build your brand presence where it matters most. With our social media marketing services, we help you reach, engage, and grow your audience across platforms like Facebook, Instagram, Twitter, and LinkedIn. From content creation to targeted ads, we help amplify your voice in the digital space.",
            link: "/services/social-media-marketing"
        },
        
    ]
  return (
    <div className='services mt-20'>
      <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30
">
        <div className="max-w-[1200px] mx-auto p-3">
        <h2 className='text-center text-white text-4xl font-bold mt-5'>Digital Marketing Services</h2>
      <div className="flex flex-wrap gap-5 justify-center mt-10 ">
        {Ddata.map((item, index) => (
            <div key={index} className="md:w-[370px] w-full flex flex-col text-center gap-3 border-2 border-gray rounded-tr-3xl rounded-bl-3xl py-5 px-8 hover:translate-y-2">
            {item.icon}
            <h2 className='text-2xl text-white font-bold'>{item.head}</h2>
            <p className='text-white '>{item.desc}</p>
            <Link to={item.link} className=' text-lg text-purple-500 font-semibold'>View More</Link>
        </div>
        ))}
        
        
      </div>
        </div>
      </div>
    </div>
  )
}

export default Services

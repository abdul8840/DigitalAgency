import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";


import Webimg from '../assets/wdc1.png';
import Seoimg from '../assets/wdc2.png';
import EMimg from '../assets/wdc3.png';
import SMimg from '../assets/wdc4.png';

const WDContent = () => {
    const Ddata = [
        {
            icon: <HiOutlineDesktopComputer className='text-3xl text-purple-500 hover:text-white' />,
            slogan: "Effortless Browsing Across All Devices",
            head: "Mobile-Responsive and Optimized for All Devices",
            desc: "Our websites are crafted to be fully responsive, ensuring a seamless experience on desktops, tablets, and smartphones. With adaptive layouts and touch-friendly navigation, we make sure your site looks great and functions flawlessly, regardless of the device. This versatility enhances your brand's reach and engagement, as customers can connect with you anywhere, anytime.",
            img: Webimg,
        },
        {
            icon: <TbWorldSearch className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "User-Centric Design That Engages and Retains",
            head: "Enhanced User Experience to Boost Engagement",
            desc: "Every detail of our web designs is tailored to create a smooth, enjoyable user journey. By focusing on easy navigation, visually appealing layouts, and intuitive interfaces, we make it easy for visitors to find what they need. This enhanced user experience builds trust, keeps customers on your site longer, and increases the chances of meaningful engagement.",
            img: Seoimg,
        },
        {
            icon: <FaComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Speed That Keeps Visitors Coming Back",
            head: "Faster Loading Times for a Seamless Experience",
            desc: "In today’s fast-paced digital world, speed matters. Our websites are optimized for quick loading times, providing visitors with a smooth, frustration-free browsing experience. A faster website reduces bounce rates, improves search rankings, and keeps customers engaged, giving your business the competitive edge it needs online.",
            img: SMimg,
        },
        {
            icon: <GrCloudComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Designs That Speak Your Brand Language",
            head: "Custom Designs Reflecting Your Unique Brand Identity",
            desc: "We believe your website should be a true reflection of your brand. Our team creates custom designs that resonate with your target audience, capturing your brand’s personality and values. With unique layouts, color schemes, and imagery tailored just for you, we ensure your website stands out in a crowded digital landscape, leaving a lasting impression on every visitor.",
            img: EMimg,
        },
    ];

    return (
        <div className='mt-20 max-w-[1200px] mx-auto p-3'>
            {/* <h2 className='text-center text-white text-4xl font-bold mt-5 mb-10'>What We Offers</h2> */}
            <div className="flex flex-col gap-12">
                {Ddata.map((item, index) => (
                    <div key={index} className="flex justify-between items-center flex-wrap">
                        {/* Conditional rendering for even and odd indexes */}
                        {index % 2 === 0 ? (
                            <>
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-center gap-3 pr-2">
                                        <h2>{item.icon}</h2>
                                            <h3 className='text-purple-600 font-semibold hover:underline'>{item.slogan}</h3>
                                    </div>
                                    <h2 className='text-2xl font-bold mb-5'>{item.head}</h2>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="">
                                    <img src={item.img} alt="images" className='w-[500px] h-[300px] object-cover rounded-xl' />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="">
                                    <img src={item.img} alt="images" className='w-[500px] h-[300px] object-cover rounded-xl' />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-center gap-3 pr-2">
                                        <h2>{item.icon}</h2>
                                            <h3 className='text-purple-600 font-semibold hover:underline'>{item.slogan}</h3>
                                    </div>
                                    <h2 className='text-2xl font-bold mb-5'>{item.head}</h2>
                                    <p>{item.desc}</p>
                                    
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WDContent

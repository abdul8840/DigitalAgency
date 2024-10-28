import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";


import Webimg from '../assets/ppcc1.png';
import Seoimg from '../assets/ppcc2.png';
import EMimg from '../assets/ppcc3.png';
import SMimg from '../assets/ppcc4.png';

const PPCContent = () => {
    const Ddata = [
        {
            icon: <HiOutlineDesktopComputer className='text-3xl text-purple-500 hover:text-white' />,
            slogan: "Maximize Your Marketing Budget",
            head: "Cost-Effective with Measurable ROI",
            desc: "Invest wisely with our cost-effective digital marketing solutions! We prioritize campaigns that deliver measurable return on investment (ROI), ensuring that every dollar spent works hard for your brand. By analyzing performance metrics and adjusting strategies in real time, we help you achieve your marketing goals without breaking the bank. Experience transparent reporting that showcases your campaign's success and provides insights for continuous improvement.",
            img: Webimg,
        },
        {
            icon: <TbWorldSearch className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Boost Your Online Presence Instantly",
            head: "Immediate Increase in Website Traffic",
            desc: "Experience a surge in website traffic like never before! Our targeted digital marketing strategies are designed to attract visitors to your site immediately. By leveraging data-driven techniques and industry best practices, we ensure that your brand is seen by the right audience at the right time. Say goodbye to stagnant numbers and hello to a vibrant online presence that drives engagement and conversions!",
            img: Seoimg,
        },
        {
            icon: <FaComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Precision Targeting for Maximum Impact",
            head: "Targeted Ads That Reach the Right Audience",
            desc: "Unlock the power of targeted advertising! Our approach focuses on reaching the specific audience most likely to engage with your brand. By utilizing advanced targeting options, we ensure that your ads are delivered to the right people—those who are genuinely interested in your products or services. With our targeted ads, you can connect with potential customers effectively and efficiently, driving higher engagement and conversions.",
            img: SMimg,
        },
        {
            icon: <GrCloudComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Tailored Advertising Solutions for Every Business",
            head: "Customizable Ad Campaigns That Adapt to Your Goals",
            desc: "Your business is unique, and your advertising should be too! Our customizable ad campaigns are designed to adapt to your specific goals and objectives. Whether you aim to increase brand awareness, drive sales, or promote a new product, we work closely with you to create a campaign that aligns with your vision. With flexible options and ongoing optimization, we ensure that your ads evolve to meet changing market conditions and business needs.",
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

export default PPCContent

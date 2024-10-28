import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";


import Webimg from '../assets/emc1.png';
import Seoimg from '../assets/emc2.png';
import EMimg from '../assets/emc3.png';
import SMimg from '../assets/emc4.png';

const EMContent = () => {
    const Ddata = [
        {
            icon: <HiOutlineDesktopComputer className='text-3xl text-purple-500 hover:text-white' />,
            slogan: "Connect with Customers on a Personal Level",
            head: "Personalized Messaging to Engage Customers",
            desc: "In today’s competitive landscape, personalized messaging is key to capturing your customers' attention. By tailoring your communications based on individual preferences and behaviors, you create a meaningful connection that resonates with your audience. Whether through email, SMS, or social media, personalized messaging enhances customer engagement, making your brand memorable and trustworthy.",
            img: Webimg,
        },
        {
            icon: <TbWorldSearch className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Fostering Lasting Relationships",
            head: "Improved Customer Retention and Loyalty",
            desc: "Retaining customers is just as crucial as acquiring new ones. Our targeted marketing strategies focus on building loyalty by consistently providing value and exceptional service. By engaging with your audience through tailored content and exclusive offers, you encourage repeat business and transform first-time buyers into lifelong advocates for your brand.",
            img: Seoimg,
        },
        {
            icon: <FaComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Maximize Your Impact with Targeted Campaigns",
            head: "High Open and Conversion Rates with Targeted Campaigns",
            desc: "The right message delivered at the right time can significantly boost your marketing performance. Our targeted campaigns are designed to achieve high open and conversion rates, ensuring that your communications are not only seen but also acted upon. By leveraging data-driven insights, we create compelling content that resonates with your audience and drives measurable results.",
            img: SMimg,
        },
        {
            icon: <GrCloudComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Smart Marketing for Every Budget",
            head: "Cost-Effective with a High ROI for Businesses of All Sizes",
            desc: "Investing in effective marketing strategies shouldn’t break the bank. Our cost-effective solutions are tailored to deliver a high return on investment for businesses of all sizes. With a focus on efficiency and results, we help you allocate resources wisely, ensuring your marketing efforts yield maximum impact without compromising your budget.",
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

export default EMContent

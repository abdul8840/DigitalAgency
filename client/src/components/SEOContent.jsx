import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";


import Webimg from '../assets/seoc1.png';
import Seoimg from '../assets/seoc2.png';
import EMimg from '../assets/seoc3.png';
import SMimg from '../assets/seoc4.png';

const SEOContent = () => {
    const Ddata = [
        {
            icon: <HiOutlineDesktopComputer className='text-3xl text-purple-500 hover:text-white' />,
            slogan: "Maximize Your Online Presence",
            head: "Increased website traffic and brand visibility",
            desc: "In today's digital landscape, increasing your website traffic and brand visibility is crucial for standing out in a crowded market. Our comprehensive strategies focus on enhancing your online presence, ensuring that your brand reaches the right audience at the right time. By utilizing effective SEO techniques and targeted marketing campaigns, we can drive significant traffic to your site, amplifying your brand's message and attracting potential customers.",
            img: Webimg,
        },
        {
            icon: <TbWorldSearch className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Build Trust with Enhanced Credibility",
            head: "Enhanced credibility with higher search engine rankings",
            desc: "Achieving higher search engine rankings not only boosts your visibility but also enhances your credibility. Customers are more likely to trust brands that appear on the first page of search results. We implement proven SEO strategies that help your website climb the rankings, establishing your business as a reputable authority in your industry. As your credibility grows, so does your customer base, leading to lasting relationships and increased loyalty.",
            img: Seoimg,
        },
        {
            icon: <FaComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Attract Quality Leads for Higher Conversions",
            head: "Attracts quality leads and higher conversion rates",
            desc: "Our approach is designed to attract quality leads that are more likely to convert into paying customers. By targeting your ideal audience and tailoring your marketing efforts, we ensure that the traffic you receive is not only high in volume but also relevant. This focus on quality over quantity leads to higher conversion rates, turning potential customers into loyal advocates for your brand. With our expertise, you can expect a streamlined sales funnel that maximizes your marketing ROI.",
            img: SMimg,
        },
        {
            icon: <GrCloudComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Achieve Long-Term Digital Growth",
            head: "Long-term digital growth with sustained results",
            desc: "Digital marketing is not just a short-term solution; it's a pathway to sustained growth and success. Our strategies are designed with long-term results in mind, ensuring that your brand continues to thrive in an ever-changing digital landscape. By leveraging analytics and ongoing optimization, we help you adapt to market trends and consumer behavior, positioning your brand for continuous growth and success in the digital arena.",
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

export default SEOContent

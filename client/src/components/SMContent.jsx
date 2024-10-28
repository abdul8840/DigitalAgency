import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";


import Webimg from '../assets/smc1.png';
import Seoimg from '../assets/smc2.png';
import EMimg from '../assets/smc3.png';
import SMimg from '../assets/smc4.png';

const SMContent = () => {
    const Ddata = [
        {
            icon: <HiOutlineDesktopComputer className='text-3xl text-purple-500 hover:text-white' />,
            slogan: "Elevate Your Brand to New Heights",
            head: "Increased Brand Visibility and Recognition",
            desc: "In today’s competitive digital landscape, standing out is essential for success. Our targeted marketing strategies enhance your brand's visibility, ensuring it captures the attention it deserves. By utilizing SEO, social media, and content marketing, we help your brand reach wider audiences, fostering recognition that translates into loyalty. With every campaign, we focus on positioning your brand as a trusted leader in your industry, helping you connect with more potential customers than ever before.",
            img: Webimg,
        },
        {
            icon: <TbWorldSearch className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Connect Directly with Your Audience",
            head: "Direct Engagement with Your Target Audience",
            desc: "Engaging with your target audience is the key to building lasting relationships. Our approach emphasizes personalized communication, utilizing channels like social media, email marketing, and interactive content to foster meaningful interactions. By understanding your audience’s needs and preferences, we create campaigns that resonate, encouraging them to engage with your brand. This direct engagement not only enhances customer satisfaction but also drives conversions, turning casual visitors into loyal advocates.",
            img: Seoimg,
        },
        {
            icon: <FaComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Cultivate a Thriving Community",
            head: "Build Community and Drive Traffic to Your Site",
            desc: "Building a strong community around your brand is crucial for sustained growth. Our marketing strategies focus on creating a sense of belonging among your audience, fostering loyalty and encouraging word-of-mouth referrals. Through engaging content, social media interactions, and community-driven initiatives, we help drive traffic to your site while nurturing an active community. This collaborative environment not only enhances brand loyalty but also boosts your online presence, making your site a go-to destination for your audience.",
            img: SMimg,
        },
        {
            icon: <GrCloudComputer className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Harness the Power of Data-Driven Insights",
            head: "Measurable Insights to Refine and Optimize Campaigns",
            desc: "Understanding your campaign's performance is essential for continuous improvement. We provide comprehensive analytics and measurable insights that help you gauge the effectiveness of your marketing efforts. By tracking key performance indicators (KPIs) and analyzing user behavior, we identify trends and areas for optimization. This data-driven approach allows us to refine your campaigns, ensuring they deliver maximum impact and return on investment. With our insights, you can confidently make informed decisions that propel your brand forward.",
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

export default SMContent

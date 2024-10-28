import React from 'react';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import Webimg from '../assets/wd1.png';
import Seoimg from '../assets/seo1.png';
import EMimg from '../assets/em1.jpg';
import SMimg from '../assets/sm1.jpg';


const ServiceContent = () => {
    const Ddata = [
        {
            icon: <HiOutlineDesktopComputer className='text-3xl text-purple-500 hover:text-white' />,
            slogan: "Get a beautiful website that wins customers.",
            head: "Design That Delivers Lasting Impressions",
            desc: "Your website is more than just an online presence—it’s your brand’s digital storefront. Our web design services are focused on creating beautiful, mobile-responsive websites that provide seamless user experiences. We ensure that each website we design is optimized for speed, visuals, and functionality, allowing your visitors to enjoy a smooth browsing experience that reflects your brand’s unique identity. With a focus on clean aesthetics and easy navigation, we turn your website into a powerful tool for engagement and retention.",
            link: "/web-design",
            img: Webimg,
        },
        {
            icon: <TbWorldSearch className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Be seen, rank higher, and attract more customers.",
            head: "Rank Higher, Reach Farther",
            desc: "Standing out online means being seen by the right audience, at the right time. Our SEO services elevate your brand by helping you rank higher on search engines, driving organic traffic to your site. From in-depth keyword research to on-page optimization and technical enhancements, we cover all aspects of SEO to ensure your website consistently reaches top results. Let us help you increase visibility, attract qualified leads, and stay ahead in the competitive digital landscape.",
            link: "/search-engine-optimization",
            img: Seoimg,
        },
        {
            icon: <RiAdvertisementFill className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Drive instant traffic that converts into loyal customers.",
            head: "Targeted Ads, Immediate Results",
            desc: "Get your message in front of the right audience, right when they’re ready to act. Our PPC advertising services drive instant traffic through well-crafted, high-conversion campaigns on platforms like Google and Bing. By using strategic ad copy, precise targeting, and data-driven bidding, we maximize the impact of every ad dollar. Our tailored approach to PPC ensures you get measurable results, from increased web traffic to higher conversion rates.",
            link: "/pay-per-click-advertising",
            img: SMimg,
        },
        {
            icon: <MdMarkEmailUnread className='max-w-full m-auto text-3xl text-purple-500 hover:text-white' />,
            slogan: "Stay connected with messages that inspire action.",
            head: "Stay Connected, Build Loyalty",
            desc: "Connect with your customers directly through personalized Email and SMS marketing campaigns that keep them engaged. We design and manage campaigns that bring value to your audience, whether through product updates, exclusive offers, or brand stories. By combining timing, personalization, and relevant content, our approach strengthens customer loyalty and encourages repeat business—making sure your brand stays top-of-mind.",
            link: "/email-and-sms-marketing",
            img: EMimg,
        },
    ];

    return (
        <div className='mt-20 max-w-[1200px] mx-auto p-3'>
            <div className="flex flex-col gap-12">
                {Ddata.map((item, index) => (
                    <div key={index} className="flex justify-between items-center flex-wrap">
                        {/* Conditional rendering for even and odd indexes */}
                        {index % 2 === 0 ? (
                            <>
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-center gap-3 pr-2">
                                        <h2>{item.icon}</h2>
                                        <Link to={item.link}>
                                            <h3 className='text-purple-600 font-semibold hover:underline'>{item.slogan}</h3>
                                        </Link>
                                    </div>
                                    <h2 className='text-2xl font-bold'>{item.head}</h2>
                                    <p>{item.desc}</p>
                                    <Link to={item.link} className='text-start mt-2 text-lg flex items-center gap-2 text-purple-500 font-semibold'>View More <FaArrowRightLong /></Link>
                                </div>
                                <div className="">
                                    <img src={item.img} alt="images" className='w-[500px] h-[300px] object-cover' />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="">
                                    <img src={item.img} alt="images" className='w-[500px] h-[300px] object-cover' />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-center gap-3 pr-2">
                                        <h2>{item.icon}</h2>
                                        <Link to={item.link}>
                                            <h3 className='text-purple-600 font-semibold hover:underline'>{item.slogan}</h3>
                                        </Link>
                                    </div>
                                    <h2 className='text-2xl font-bold'>{item.head}</h2>
                                    <p>{item.desc}</p>
                                    <Link to={item.link} className='text-start mt-2 text-lg flex items-center gap-2 text-purple-500 font-semibold'>View More <FaArrowRightLong /></Link>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceContent;

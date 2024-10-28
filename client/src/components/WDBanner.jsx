import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from "../assets/wdhero.jpg";

const WDBanner = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-3">
    <div className="w-full min-h-[90vh] py-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 ">
      {/* leftside */}
      <div className="flex-1 order-1 md:order-none">
        <span className="text-lg text-gray-500 block mb-1">Create a Lasting First Impression</span>
        <Link to="/contact" className="font-bold text-[#222] dark:text-white text-4xl">
        Design Your Websites With Experts
        </Link>
        <p className="text-xl mt-5 font-[500] text-gray-500">
        A well-designed website is your brand's digital storefront and one of the most powerful tools to capture attention. Our web design services focus on creating beautiful, user-friendly websites that are optimized for all devices, ensuring seamless experiences across desktops, tablets, and mobiles. With attention to speed, visuals, and usability, we craft websites that engage visitors, improve retention, and build trust—setting the foundation for lasting customer relationships.
        </p>
        <Link to='/contact'>
        <button className="flex gap-2 py-4  bg-[#222] hover:bg-[#111] text-white dark:bg-white dark:text-black font-bold px-8 rounded-[20px] mt-8 md:mt-10 text-2xl">Start Boosting</button>
        </Link>
      </div>
      {/* right side */}
      <div className="">
        <img
          src={HeroImg}
          alt=""
          className="home-img border-4 dark:border-gray-600"
        />
      </div>
    </div>
    </div>
  )
}

export default WDBanner

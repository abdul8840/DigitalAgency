import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from "../assets/sm1.jpg";

const PPCHero = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-3">
    <div className="w-full min-h-[90vh] py-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 ">
      {/* leftside */}
      <div className="flex-1 order-1 md:order-none">
        <span className="text-lg text-gray-500 block mb-1">Instant Traffic, Measurable Results</span>
        <Link to="/contact" className="font-bold text-[#222] dark:text-white text-4xl">
        Pay-Per-Click (PPC) Advertising
        </Link>
        <p className="text-xl mt-5 font-[500] text-gray-500">
        With our PPC advertising services, get immediate visibility in front of your target audience. We create and manage highly-targeted ad campaigns across platforms like Google, Bing, and social media to attract ready-to-convert users. Our expertise in keyword targeting, ad copy, and bidding strategy ensures every dollar of your ad spend works toward driving conversions and maximizing ROI.
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

export default PPCHero

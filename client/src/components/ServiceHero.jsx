import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from "../assets/service.png";
import { FaSearchDollar } from "react-icons/fa";

const ServiceHero = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-3">
    <div className="w-full min-h-[90vh] py-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 ">
      {/* leftside */}
      <div className="flex-1 order-1 md:order-none">
        <span className="text-lg text-gray-500 block mb-1">Welcome to our digital marketing services</span>
        <Link to="/" className="font-bold text-[#222] dark:text-white text-4xl">
        Transforming Brands in the Digital Age
        </Link>
        <p className="text-xl mt-5 font-[500] text-gray-500">
        Your business deserves to be seen, heard, and valued in today's fast-paced digital landscape. Our expert-driven strategies in SEO, web design, social media, and more will help you build a lasting online presence. From boosting visibility to driving conversions, we’re here to turn your digital goals into reality.
        </p>
        <div className="flex gap-5 flex-wrap mt-5">
            <div className="flex gap-2 items-center border-2 border-black dark:border-white py-1 px-3 text-black dark:text-white rounded-full">
            <FaSearchDollar /> <span className="font-semibold">SEO</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black dark:border-white py-1 px-3 text-black dark:text-white rounded-full">
            <FaSearchDollar /> <span className="font-semibold">PPC</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black dark:border-white py-1 px-3 text-black dark:text-white rounded-full">
            <FaSearchDollar /> <span className="font-semibold">SMM</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black dark:border-white py-1 px-3 text-black dark:text-white rounded-full">
            <FaSearchDollar /> <span className="font-semibold">Web Design</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black dark:border-white py-1 px-3 text-black dark:text-white rounded-full">
            <FaSearchDollar /> <span className="font-semibold">Email Marketing</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black dark:border-white py-1 px-3 text-black dark:text-white rounded-full">
            <FaSearchDollar /> <span className="font-semibold">Google Analytics</span>
            </div>
        </div>
        <Link to='/contact'>
        <button className="flex gap-2 py-4  bg-[#222] hover:bg-[#111] text-white dark:bg-white dark:text-black font-bold px-8 rounded-[20px] mt-8 md:mt-10 text-2xl">Start Boosting</button>
        </Link>
      </div>
      {/* right side */}
      <div className="">
        <img
          src={HeroImg}
          alt=""
          className="home-img border-4 dark:border-gray-600 object-cover"
        />
      </div>
    </div>
    </div>
  )
}

export default ServiceHero

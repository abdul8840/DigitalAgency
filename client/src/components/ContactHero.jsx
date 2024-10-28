import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from "../assets/service.png";
import { FaSearchDollar } from "react-icons/fa";

const ContactHero = () => {
  return (
    <div className="contact">
        <div className="max-w-[1200px] mx-auto p-3">
    <div className="w-full min-h-[40vh] py-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 ">
      {/* leftside */}
      <div className="flex-1 text-center order-1 md:order-none">
        <Link to="/" className="font-bold text-[#222] text-4xl">
        Ready to Grow? Let's Talk! Your Success Journey Begins Here
        </Link>
        <p className="text-xl mt-5 font-[500] text-gray-500">
        Your growth is our goal. Connect with us today and let’s explore what’s possible.
        </p>
        <div className="flex gap-5 justify-center flex-wrap mt-5">
            <div className="flex gap-2 items-center border-2 border-black py-1 px-3 text-black  rounded-full">
            <FaSearchDollar /> <span className="font-semibold">SEO</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black py-1 px-3 text-black  rounded-full">
            <FaSearchDollar /> <span className="font-semibold">PPC</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black py-1 px-3 text-black  rounded-full">
            <FaSearchDollar /> <span className="font-semibold">SMM</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black py-1 px-3 text-black  rounded-full">
            <FaSearchDollar /> <span className="font-semibold">Web Design</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black py-1 px-3 text-black  rounded-full">
            <FaSearchDollar /> <span className="font-semibold">Email Marketing</span>
            </div>
            <div className="flex gap-2 items-center border-2 border-black py-1 px-3 text-black  rounded-full">
            <FaSearchDollar /> <span className="font-semibold">Google Analytics</span>
            </div>
        </div>
    
      </div>
    </div>
    </div>
    </div>
  )
}

export default ContactHero

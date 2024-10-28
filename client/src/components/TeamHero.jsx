import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from "../assets/team.jpg";
import { FaSearchDollar } from "react-icons/fa";

const TeamHero = () => {
    return (
        <div className="max-w-[1200px] mx-auto p-3">
        <div className="w-full min-h-[90vh] py-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 ">
          {/* leftside */}
          <div className="flex-1 order-1 md:order-none">
            <span className="text-lg text-gray-500 block mb-1">Your Vision, Our Strategy</span>
            <Link to="/" className="font-bold text-[#222] dark:text-white text-4xl">
            Meet the Experts Behind Your Digital Growth
            </Link>
            <p className="text-xl mt-5 font-[500] text-gray-500">
            Our team is a collective of digital marketing experts who live and breathe creativity, strategy, and data. With backgrounds across SEO, content, social media, and more, we work in sync to craft unique campaigns that truly resonate. Together, we turn marketing challenges into growth opportunities, driving engagement and measurable results for brands like yours.
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
            <button className="flex gap-2 py-4  bg-[#222] hover:bg-[#111] text-white dark:bg-white dark:text-black font-bold px-8 rounded-[20px] mt-8 md:mt-10 text-2xl">Say Hii</button>
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

export default TeamHero

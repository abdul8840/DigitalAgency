import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from "../assets/seo1.png";

const SEOHero = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-3">
    <div className="w-full min-h-[90vh] py-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 ">
      {/* leftside */}
      <div className="flex-1 order-1 md:order-none">
        <span className="text-lg text-gray-500 block mb-1">Be Visible Where it Matters</span>
        <Link to="/contact" className="font-bold text-[#222] dark:text-white text-4xl">
        Search Engine Optimization (SEO)
        </Link>
        <p className="text-xl mt-5 font-[500] text-gray-500">
        In the crowded digital landscape, visibility is key. Our SEO services help your business rank higher on search engines, making it easier for potential customers to find you. Through targeted keyword strategies, on-page and technical SEO, and data-driven content optimization, we ensure your website reaches the top results and stays there. With our SEO, your brand stays relevant, reaching more people and attracting qualified leads organically.
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

export default SEOHero

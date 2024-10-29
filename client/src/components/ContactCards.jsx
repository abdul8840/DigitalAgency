import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";

const ContactCards = () => {
    const infodata = [
        {
            icon: <IoLogoWhatsapp className='mx-auto text-6xl text-purple-500 mb-2' />,
            head: "Whatsapp",
            info: "+91 9998887770",
        },
        {
            icon: <MdEmail className='mx-auto text-6xl text-purple-500 mb-2' />,
            head: "Email",
            info: "metlifedm4u@gmail.com",
        },
        {
            icon: <MdAddCall className='mx-auto text-6xl text-purple-500 mb-2' />,
            head: "Phone Number",
            info: "+91 1204443330",
        },
    ]
  return (
    <div className='contus mt-20 p-5'>
      <div className="max-w-[1200px] mx-auto">
        <h2 className='text-4xl font-bold mb-10 text-center text-black'>How to reach us?</h2>
        <div className="flex justify-center flex-wrap gap-3">
            {infodata.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-5 w-[300px] text-center flex flex-col">
                {item.icon}
                <h3 className='text-2xl font-bold mb-3 text-black'>{item.head}</h3>
                <h4 className='text-black'>{item.info}</h4>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ContactCards

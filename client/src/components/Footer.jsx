import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const FooterCom = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='flex justify-center mb-3 self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='border border-blue-500 text-blue-500 text-4xl rounded-lg p-[1px]'>MetLife</span><span className='text-4xl'>DM</span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Services' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/services/web-design'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Web Design
                </Footer.Link>
                <Footer.Link
                  href='/services/search-engine-optimization'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  SEO
                </Footer.Link>
                <Footer.Link
                  href='/services/pay-per-click-advertising'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Pay Per Click
                </Footer.Link>
                <Footer.Link
                  href='/services/email-and-sms-marketing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Email Marketing
                </Footer.Link>
                <Footer.Link
                  href='/services/social-media-marketing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Social Media Marketing
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Quick Links' />
              <Footer.LinkGroup col>
                <Footer.Link href='/'>Home</Footer.Link>
                <Footer.Link href='/services'>Services</Footer.Link>
                <Footer.Link href='/team'>Team</Footer.Link>
                <Footer.Link href='/contact'>Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Digital Marketing Agency"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/sahandghavidel' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>

          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterCom

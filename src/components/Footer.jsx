import React from 'react'
import { arrow, planet, dollar, heart, profile, search } from '../assets'

const Footer = () => {
  return (
    <div className='sticky w-full px-10 bottom-0 bg-white border-t-2 border-gray-200 shadow-md text-[15px] z-[1000]'>
        <div className='flex medium:hidden justify-center items-center gap-14 py-2'>
            <div className='flex flex-col justify-center items-center'>
                <img src={search} alt="" className='h-8 w-8 contrast-50'/>
                <h3 className='text-[13px] font-semibold'>Explore</h3>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={heart} alt="" className='h-8 w-8 contrast-50'/>
                <h3 className='text-[13px] font-semibold'>Wishlists</h3>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={profile} alt="" className='h-8 w-8 opacity-50'/>
                <h3 className='text-[13px] font-semibold'>Log in</h3>
            </div>
        </div>
        <div className='py-3 hidden medium:flex gap-8 justify-between overflow-hidden '>

            <div className='flex gap-8 text-[14.5px] '>

                <h3>&copy; 2023 Airbnb, Inc.</h3>

                <ul className='flex gap-7'>
                    <li className='flex gap-2 items-center hover:underline cursor-pointer transition ease-in-out hover:duration-700 '>
                        <span className='bg-secondary w-1 h-1 rounded-full '></span>
                        Team
                    </li>
                    <li className='flex gap-2 items-center hover:underline cursor-pointer transition ease-in-out hover:duration-700 '>
                        <span className='bg-secondary w-1 h-1 rounded-full '></span>
                        Sitemap
                    </li>
                    <li className='flex gap-2 items-center hover:underline cursor-pointer transition ease-in-out hover:duration-700 '>
                        <span className='bg-secondary w-1 h-1 rounded-full '></span>
                        Privacy
                    </li>
                    <li className='flex gap-2 items-center hover:underline cursor-pointer transition ease-in-out hover:duration-700 '>
                        <span className='bg-secondary w-1 h-1 rounded-full '></span>
                        Your Privacy Choices
                    </li>
                    <li className='flex gap-2 items-center hover:underline cursor-pointer transition ease-in-out hover:duration-700 '>
                        <span className='bg-secondary w-1 h-1 rounded-full '></span>
                        Destination
                    </li>
                </ul>
            </div>

            <div className='flex gap-5 text-black '>
                <div className='flex gap-2 items-center'>
                    <img src={planet} alt="network" className='h-5 w-5'/>
                    <h3 className='font-medium hover:underline cursor-pointer'>English (US)</h3>
                </div>
                <div className='flex gap-2'>
                    <img src={dollar} alt="network" className='h-5 w-5'/>
                    <h3 className='font-medium hover:underline cursor-pointer'>USD</h3>
                </div>
                <div className='flex gap-2'>
                    <h3 className='font-medium hover:underline cursor-pointer'>Support and Resources</h3>
                    <img src={arrow} alt="network" className='h-5 w-5 rotate-[265deg]'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
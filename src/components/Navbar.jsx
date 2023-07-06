import React from 'react'
import {logo, menu, planet, profile, search, setting} from '../assets'

const Navbar = () => {
  return (
    <div className='border-b border-gray-300 sticky inset-0 z-[1000] bg-white'>
      <div className='px-10'>
        <div className='py-3 flex justify-center medium:justify-between items-center'>
          <div className='p-2 w-full rounded-[2rem] border  text-[14px] border-gray-300 shadow-md flex medium:hidden justify-between'>
            <div className='flex items-center'>
              <img src={search} alt="Search" className=' h-8 w-8 invert mr-2'/>
              <div>
                <h3 className='font-body font-semibold'>Anywhere</h3>
                <h3 className='flex items-center text-tertiary gap-1'>Any week <span className='inline-block w-0.5 h-0.5 bg-tertiary rounded-full '></span> Add guests</h3>
              </div>
            </div>
            <div className='w-10 h-10 border rounded-full flex items-center justify-center border-gray-300 cursor-pointer'>
              <img src={setting} alt="Setting" className='h-5 w-5'/>
            </div>
          </div>

          <div className='medium:flex gap-1 items-center lg:flex-nav-flex-width flex-nav-flex-width-responsive invisible medium:visible hidden'>
            <img src={logo} alt="Logo" className='w-10 h-10'/>
            <h2 className='font-logo font-bold text-primary text-2xl lg:visible invisible'>airbnb</h2>
          </div>
          
          <div className='
            medium:flex justify-between items-center px-3 py-2 shadow-md rounded-[2rem] relative bg-white border border-gray-200 hover:shadow-lg hidden 
          '>
            <h3 className='font-body text-[15px] font-semibold after:border-r border-gray-500 after:ml-2.5 px-2.5'>Anywhere</h3>
            <h3 className='font-body text-[15px] font-semibold after:border-r border-gray-500 after:ml-2.5 px-2.5'>Any Week</h3>
            <h3 className='font-body font-extralight text-gray-400 text-[15px] px-2.5'>Add Guests</h3>
            <div className='bg-primary rounded-full p-1'>
              <img src={search} alt="search" className='w-7 h-7'/>
            </div>
          </div>

          <div className='medium:flex flex-row-reverse flex-nav-flex-width invisible medium:visible hidden'>
              <div className='flex items-center gap-3'>
                <h3 className='font-body text-[15px] font-semibold hover:bg-gray-100 p-2.5 rounded-[2rem] cursor-pointer'>Become a host</h3>

                <img src={planet} alt="network" className='w-5 h-5'/>

                <div className='flex border-grey-900 border rounded-[2rem] p-1 items-center gap-2 cursor-pointer hover:shadow-md transition 550ms ease-in'>
                  <img src={menu} alt="network" className='w-6 h-6 '/>
                  <img src={profile} alt="network" className='w-9 h-9'/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
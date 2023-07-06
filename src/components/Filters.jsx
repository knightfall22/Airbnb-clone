import {filters} from "../constants/constants"
import React, {useRef} from 'react'
import useSmoothHorizontalScroll from 'use-smooth-horizontal-scroll';
import {
    logo,
    search,
    planet,
    menu,
    profile,
    desert,
    barn,
    beach,
    fire,
    key,
    mansion,
    piza,
    pool,
    room,
    tea,
    tennis,
    tower,
    tropical,
    view,
    setting,
    arrow
} from '../assets'
 
 const Filters = ({isScrolled}) => {
    const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } = useSmoothHorizontalScroll();


    return (
      <div className={`${isScrolled ? 'shadow-lg': ''} medium:px-10 px-0 pt-5 w-full flex mt-2 sticky inset-0 z-[900] bg-white top-[4rem] items-center  gap-4`}>
        <div className="flex gap-4 w-full medium:w-11/12 bg-white relative overflow-x-auto container-scrollbar" ref={scrollContainerRef} onScroll={handleScroll}>
            {filters.map(filter => {
                return (

                        <div className="p-3 flex flex-col items-center gap-3 cursor-pointer filter-item" key={filter.name} >
                            <img src={filter.icon} alt={filter.name} className="w-6 h-6"/>
                            <h3 className="text-xs whitespace-nowrap capitalize text-gray-600 font-medium ">{filter.name}</h3>
                        </div>
                )
            })}
        </div>
            <div className="position right-0 w-12 h-[76px] bg-white relative filter-arrow-container hidden medium:block ">
                <div
                    onClick={() => scrollTo(200)} disabled={isAtEnd}
                    className=" bg-white h-8 w-8 rounded-full flex items-center justify-center border-gray-300 border-2 absolute top-[30%] left-[-7px] cursor-pointer hover:shadow-lg ">
                        <img src={arrow} alt="" className="h-6 w-6"/>
                </div>
            </div>
            <div className="absolute left-0 w-12 h-[76px] bg-white filter-arrow-container hidden medium:block">
                <div
                    onClick={() => scrollTo(-200)} disabled={isAtStart}
                    className={`${isAtStart ? 'hidden' : 'flex'} bg-white h-8 w-8 rounded-full items-center justify-center border-gray-300 border-2 absolute top-[30%] right-[-7px] cursor-pointer hover:shadow-lg `}>
                        <img src={arrow} alt="" className="h-6 w-6 rotate-180"/>
                </div>
            </div>
        <div>
            <div className=" hidden medium:flex ">
                <a href="#" className="border border-gray-400 flex px-4 py-3 gap-1 items-center font-semibold rounded-lg">
                    <img src={setting} alt="setting" className="h-4 w-4"/>
                    <h3 className="text-[14px]">Filters</h3>
                </a>
            </div>
        </div>
      </div>
    )
 }
 
 export default Filters
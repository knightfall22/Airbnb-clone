import React from 'react'
import { arrow } from '../../assets'

const ArrowPrev = ({onClick, show}) => {
    return (
        <div className={`${show ? 'block' : 'hidden'} w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-white 750ms ease-linear custom-arrow-prev`} >
            <img src={arrow} alt="left" className='w-5 h-5 ' />
        </div>
    )
}

const ArrowNext = ({onClick, show}) => {
    return (
        <div className= {`${show ? 'block': 'hidden'} w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-white 750ms ease-linear custom-arrow-next`}>
            <img src={arrow} alt="right" className='w-5 h-5' />
        </div>
    )
}

export {
    ArrowNext,
    ArrowPrev
}
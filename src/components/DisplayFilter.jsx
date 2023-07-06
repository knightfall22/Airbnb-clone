import React, {useState} from 'react'
import { check } from '../assets'

const DisplayFilter = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='w-full flex justify-center items-center my-10 px-10 text-[13px] sm:text-[15px]'>
        <div className='p-4 border border-gray-300 flex items-center col-span-full justify-center rounded-md gap-12'>
            <div className='flex sm:flex-row flex-col'>
                <h3 className="font-body text-[15px] font-semibold sm:after:border-r border-gray-500 sm:after:ml-2.5 sm:px-2.5">Display total prices</h3>
                <h4>Includes all fees, before taxes</h4>
            </div>
            <div 
                className={`${show ? 'bg-black' :'bg-tertiary hover:bg-secondary' } w-[48px] h-[32px] rounded-[2rem] flex items-center  550ms ease-in cursor-pointer`}
                onClick={() => setShow(!show)}  
            >
                <div className={`${show ? 'translate-x-[14.5px]': 'translate-x-0'} w-[27px] h-[27px] rounded-full bg-white ml-[2.7px] flex items-center justify-center`}>
                    <img src={check} alt="check" className={`${show ? 'visible': 'invisible'} 'h-4 w-4 '`}/>
                </div>
            </div>
        </div>
    </div>
  )
}
//48x32

export default DisplayFilter
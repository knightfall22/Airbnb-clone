import React, {useState} from 'react'
import { heart, star, likedHeart } from '../assets'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { ArrowNext, ArrowPrev } from './SwiperController/Controller';


const Card = ({house}) => {
  const [like, setLike] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <div 
      onMouseEnter={() => setShow(true)}  
      onMouseLeave={() => setShow(false)}
      className='relative '>
      {/* <ReactSVG src={heart} className='w-7 h-7 right-0 absolute'/> */}
      <img src={like ? likedHeart: heart} 
        className='w-7 h-7 right-0 absolute cursor-pointer z-30'
        onClick={() => setLike(!like)}  
      />
      <img src={like ? likedHeart: heart} 
        className={`${like ? 'like-animation': null} 'w-5 h-5 right-1 top-1 opacity-0 absolute z-20'`}
      />


      <Swiper navigation={{ prevEl: '.custom-arrow-prev', nextEl: '.custom-arrow-next' }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full h-[280px] shadow-md"
          >
            {house.images.map((image, index) => (
            <SwiperSlide key={index*Math.random()}>
              <img 
                src={image} 
                alt="" 
                className='w-full h-full object-cover rounded-lg z-40'
              />
            </SwiperSlide>
            ))}

            <ArrowPrev show={show} />
            <ArrowNext show={show} />
      </Swiper>

     <div className='mt-2 flex justify-between'>
       <h3 className='font-body text-[15px] font-semibold'>{house.location}</h3>
       <div className='flex gap-1'>
          <img src={star} alt="rating" className='h-5 w-5'/>
          <h3 className='font-body text-[15px] font-light'>{house.rating}</h3>
       </div>
     </div>
       <h3 className='font-body text-[15px] font-light'>{house.stay}</h3>
       <h3 className='font-body text-[15px] font-light'>{house.duration}</h3>

       <h3 className='font-body text-[15px] mt-3 underline font-light'><span className='font-bold text-black'> {house.price} </span> a night</h3>
    </div>
  )
}

export default Card
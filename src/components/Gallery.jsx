import React from 'react'
import { houses } from '../constants/constants'
import Card from './Card'

const Gallery = () => {
  
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full px-10 my-10 gap-10 justify-center gap-y-20'>
      {houses.map((house, index) => (
        <Card key={index*Math.random()} house={house} />
      ))}
    </div>
  )
}

export default Gallery
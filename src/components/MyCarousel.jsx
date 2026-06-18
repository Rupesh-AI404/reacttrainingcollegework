import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import React from 'react'

const MyCarousel = () => {
  return (
    <div className='w-full'>
      <Carousel 
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img 
            src='/seed.webp' 
            alt='Seed' 
            className='w-full h-96 object-cover'
          />
          <p className='legend bg-black bg-opacity-50 text-white py-4 text-lg'>Seed</p>
        </div>
        <div>
          <img 
            src='/speed.jpg' 
            alt='Speed' 
            className='w-full h-96 object-cover'
          />
          <p className='legend bg-black bg-opacity-50 text-white py-4 text-lg'>Speed</p>
        </div>
      </Carousel>
    </div>
  )
}

export default MyCarousel
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
// import Container from '../shared/Reuseables/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation, A11y } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Banner = () => {
  const [show, setShow] = useState(false)
  return (
    // <Container>
    <div className='absolute top-0 overflow-hidden h-[500px]'>
      <Swiper
        slidesPerView={1}
        modules={[EffectFade, Autoplay, Navigation, A11y]}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right' }}
        effect='fade'>
        <SwiperSlide>
          <div className='w-full overflow-hidden h-[500] cover'>
           
            <Image src='/assets/images/banner2.jpg' alt='slide1' height={700} width={2600}   />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full overflow-hidden  h-[500] cover'>
            <Image src='/assets/images/banner3.jpg' alt='slide2' height={700} width={2600} />

          </div>
        </SwiperSlide>
      </Swiper>
     
    </div>
    // </Container>
  )
}

export default Banner

'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation, A11y } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Banner = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='relative'>
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
          <div className='w-full overflow-hidden '>
            <Image
              src='/assets/images/banner4.jpg'
              alt='slide1'
              className='object-cover md:h-[700px] w-full'
              height={700}
              width={2600}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full overflow-hidden '>
            <Image
              src='/assets/images/banner2.jpg'
              alt='slide2'
              className='object-cover md:h-[700px] w-full'
              height={700}
              width={2600}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner

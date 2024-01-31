'use client'

import React from 'react'
import SearchInput from '../shared/Reuseables/SearchInput'
import SearchSelect from '../shared/Reuseables/SearchSelect'
import { FaSearch } from 'react-icons/fa'
import Container from '../shared/Reuseables/Container'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import { tourListData } from '@/utils/TourListData'

const Packages = () => {
  return (
    <div className='w-full flex flex-col -z-[2] relative h-[800px] bg-cover bg-center bg-[url("/assets/images/banner2.jpg")]'>
      <div className='absolute -z-[1] h-[800px] bg-[rgba(0,0,0,0.5)] w-full'></div>
      <div className='hidden z-[1] md:flex justify-center items-center w-full bg-[rgba(0,0,0,0.7)] py-14'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-3 items-end '>
            <SearchInput
              label='Keywords'
              labelStyle='text-white font-semibold'
              divStyle='flex justify-between items-center bg-[#585D6B] p-3'
              icon={<FaSearch className='text-gray-400' />}
              inputStyle='focus:outline-none bg-transparent'
            />
            <SearchSelect
              label='Activity'
              labelStyle='text-white font-semibold'
              inputStyle='focus:outline-none bg-[#585D6B] w-full flex justify-between items-center bg-white p-3 text-[#b9c1d5] text-xs h-12'
            />
            <SearchSelect
              label='Destination'
              labelStyle='text-white font-semibold'
              inputStyle='focus:outline-none bg-[#585D6B] w-full flex justify-between items-center bg-white p-3 text-[#b9c1d5] text-xs h-12'
            />
            <SearchSelect
              label='Duration'
              labelStyle='text-white font-semibold'
              inputStyle='focus:outline-none bg-[#585D6B] w-full flex justify-between items-center bg-white p-3 text-[#b9c1d5] text-xs h-12'
            />
            <button className='bg-[#468ae7] w-full text-white h-12'>Search</button>
          </div>
        </Container>
      </div>
      <div className='py-20 flex items-center justify-center'>
        <Container>
          <div className='flex flex-col'>
            <h3 className='text-[29px] text-white'>Popular Tour Packages</h3>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Packages

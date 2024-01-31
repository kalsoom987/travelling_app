'use client'

import React, { useState } from 'react'
import Container from '../shared/Reuseables/Container'
import { tourListData } from '@/utils/TourListData'
import SingleTour from './SingleTour'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const TourList = () => {
  return (
    <div className='flex w-full justify-center items-center bg-[#F5F5F5] pt-[114px] md:pt-[492px] pb-[40px] md:pb-[100px]'>
      <Container>
        <div className='flex flex-col gap-8'>
          <div className='flex justify-between gap-8'>
            <div className='w-full md:w-[75%]'>
              <div className='flex flex-col gap-8'>
                {tourListData.map((x) => {
                  return <SingleTour item={x} key={x.id} />
                })}
              </div>
            </div>
            <div className='md:block hidden md:w-[25%]'>
              <h3 className='uppercase text-base font-semibold text-[#333333]'>Latest Tours</h3>
              <div className='flex flex-col'>
                {tourListData.slice(0, 3).map((x) => {
                  return (
                    <div
                      key={x.id}
                      className='flex justify-start items-start gap-1 border-b-[1px] border-b-gray-300 last:border-b-0 pt-[30px] cursor-pointer'>
                      <div className='w-[40%]'>
                        <div className='w-[100px] h-auto overflow-hidden'>
                          <Image
                            src={x.bannerImage}
                            alt='banner'
                            width={100}
                            height={100}
                            className='h-[70px] w-full'
                          />
                        </div>
                      </div>
                      <div className='w-[60%] flex flex-col  h-[100px]'>
                        <h3 className='text-[#333333] text-[15px] font-semibold line-clamp-2'>{x.title}</h3>
                        <div className='flex items-center justify-between'>
                          <p className='bg-[#e85e34] p-1 text-xs text-white'>25% Off</p>
                          <p className='text-sm text-[#8c8c8c]'>From Rs {x.price}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='flex w-full items-center justify-center md:justify-start gap-3'>
            <p className='w-12 h-12 rounded-full cursor-pointer bg-white hover:text-white text-[#468ae7] hover:bg-[#468ae7] flex justify-center items-center transition-all duration-300'>
              <FaChevronLeft />
            </p>
            <p className='w-12 h-12 rounded-full font-semibold cursor-pointer bg-white hover:text-white text-[#468ae7] hover:bg-[#468ae7] flex justify-center items-center transition-all duration-300'>
              1
            </p>
            <p className='w-12 h-12 rounded-full cursor-pointer bg-white hover:text-white text-[#468ae7] hover:bg-[#468ae7] flex justify-center items-center transition-all duration-300'>
              <FaChevronRight />
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TourList

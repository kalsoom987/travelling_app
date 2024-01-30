'use client'

import React, { useEffect, useState } from 'react'
import Container from '../shared/Reuseables/Container'
import { tourListData } from '@/utils/TourListData'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { LuClock3 } from 'react-icons/lu'
import { FaCalendarAlt, FaPlaneArrival, FaPlaneDeparture, FaUsers } from 'react-icons/fa'

const TourDetail = () => {
  const [tour, setTour] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setTimeout(() => {
      const findTour = tourListData.find((x) => x.id === Number(id))
      setTour(findTour)
    }, 500)
    return () => clearInterval()
  }, [])

  const listArr = ['Details', 'Map']
  const [activeTab, setActiveTab] = useState('Details')

  return (
    <div className='flex flex-col'>
      {tour && (
        <>
          <div className='flex w-full relative h-[250px] md:h-[540px]'>
            <Image
              src={tour && tour?.bannerImage}
              alt='banner'
              width={2600}
              height={640}
              className=' h-[250px] md:h-[540px] w-full'
            />
            <div className='flex justify-center  w-full h-[250px] md:h-[540px] bg-[rgba(0,0,0,0.5)] absolute top-0'>
              <Container>
                <div className='absolute bottom-10'>
                  <p className='text-[29px] text-white font-bold'>{tour.title}</p>
                </div>
              </Container>
            </div>
          </div>
          <div className='bg-[#F5F5F5] w-full py-[30px] md:py-[55px] flex justify-center items-center'>
            <Container>
              <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <LuClock3 className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>{tour.duration} days</span>
                </div>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <FaCalendarAlt className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>Availability: {tour.availability}</span>
                </div>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <FaPlaneDeparture className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>Departure: {tour.departure}</span>
                </div>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <FaPlaneArrival className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>Arrival: {tour.arrival}</span>
                </div>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <FaUsers className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>Max People: {tour.maxPeople}</span>
                </div>
              </div>
            </Container>
          </div>
          <div className='bg-[#EBEBEB] w-full flex justify-center items-center'>
            <Container>
              <div className='flex justify-center w-full md:justify-start gap-7 md:gap-10'>
                {listArr.map((x) => {
                  return (
                    <p
                      className={`text-sm py-4 md:py-8 border-b-[3px] hover:text-[#333333] border-b-[#EBEBEB] hover:border-b-[#468ae7] transition-all duration-300 cursor-pointer font-semibold ${
                        activeTab === x ? 'text-[#333333] border-b-[#468ae7]' : 'text-[#9a9a9a]'
                      }`}
                      onClick={() => setActiveTab(x)}>
                      {x}
                    </p>
                  )
                })}
              </div>
            </Container>
          </div>
          <div className='w-full py-10'></div>
        </>
      )}
    </div>
  )
}

export default TourDetail

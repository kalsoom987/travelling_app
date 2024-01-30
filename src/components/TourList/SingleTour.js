import Image from 'next/image'
import React from 'react'
import { LuClock3 } from 'react-icons/lu'
import { FaCalendarAlt } from 'react-icons/fa'

const SingleTour = ({ item }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between z-[1] items-center w-full gap-3 bg-white'>
      <div className='w-full md:w-[25%] relative'>
        <div className='absolute top-10 -left-[8px] flex justify-center items-center text-white text-xs h-[32px] w-[90px] bg-[#e85e34]'>
          20% Off
        </div>
        <div className='absolute top-[52px] left-[0.5px] z-[-1] w-10 h-10 flex justify-center rotate-45 items-center text-white text-xs bg-[#74301C]'></div>
        <div className={`h-auto md:h-[265px] overflow-hidden flex items-center justify-center`}>
          <Image
            src={item.bannerImage}
            alt='bannerImage'
            width={2600}
            height={400}
            className='w-full md:w-[2600px] h-[250px] md:h-[400px]'
          />
        </div>
      </div>
      <div className='md:w-[75%] flex md:flex-row justify-between flex-col w-full'>
        <div className='md:w-2/3 w-full my-5 px-3 md:border-r-[2px] md:border-r-gray-300'>
          <h3 className='text-[#333333] font-bold text-[20px] mb-[22px]'>{item.title}</h3>
          <div className='flex items-center justify-start gap-3 mb-[9px]'>
            <LuClock3 className='text-[#468ae7]' /> <span className='text-sm text-[#8c8c8c]'>{item.duration} days</span>
          </div>
          <div className='flex items-center justify-start gap-3 mb-[18px]'>
            <FaCalendarAlt className='text-[#468ae7]' />{' '}
            <span className='text-sm text-[#8c8c8c]'>Availability: {item.availability}</span>
          </div>
          <p className='text-sm text-[#8c8c8c] line-clamp-2 '>{item.description}</p>
        </div>
        <div className='md:w-1/3 w-full flex justify-center items-center'>
          <div className='flex flex-col items-center gap-3 w-full px-4 pb-3 md:pb-0'>
            <p className='text-sm text-[#8c8c8c]'>From</p>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-xl text-[#333333] font-semibold'>Rs {item.price}</p>
              <p className='text-sm text-[#8c8c8c]'>Per Person</p>
            </div>
            <button className='h-[45px] flex justify-center items-center bg-[#468ae7] text-xs text-white font-semibold md:w-[110px] w-full'>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTour

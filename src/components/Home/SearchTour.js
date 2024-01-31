'use client'

import React, { useState } from 'react'
import { LuMapPin } from 'react-icons/lu'
import Container from '../shared/Reuseables/Container'
import { useRouter } from 'next/navigation'

function SearchTour() {
  const router = useRouter()
  const [show, setShow] = useState('')
  return (
    <>
      <div className='w-full flex items-center justify-center pt-[95px]'>
        <Container>
          <div className='flex flex-col mb-[50px]'>
            <h1 className='flex items-center gap-3 text-[29px] mb-[22px]'>
              <LuMapPin className='text-[#4296EE] text-[32px] ' />{' '}
              <span className='text-[#333333]'>Popular Destinations</span>
            </h1>
            <p className='text-[#8c8c8c] text-[14px] pl-2'>
              Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non
              magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
        </Container>
      </div>
      <div className='flex flex-row w-full'>
        <div className='md:px-0 px-4 py-4 grid md:grid-cols-5 grid-cols-1  w-full '>
          <div
            className='bg-[url("/assets/images/Azad.jpg")] bg-cover bg-no-repeat h-[300px] md:h-[380px] lg:h-[450px] relative overflow-hidden'
            onMouseEnter={() => setShow('1st')}
            onMouseLeave={() => setShow('')}>
            <div
              className={`absolute left-5 ${
                show === '1st' ? 'bottom-4' : '-bottom-5'
              } transition-all duration-300 z-[2] flex flex-col gap-4`}>
              <p className='text-white font-semibold flex items-center gap-3'>
                <LuMapPin /> <span>Kumrat Valley</span>
              </p>
              <p
                className='text-[#4296EE] text-xs font-semibold uppercase cursor-pointer'
                onClick={() => router.push('/tour-list')}>
                View All Tours
              </p>
            </div>
            <div className='bg-black opacity-0 hover:opacity-[0.6] duration-300 transition-all absolute top-0 h-[300px] md:h-[380px] lg:h-[450px] w-full'></div>
            <div
              className={` ${
                show === '1st' ? 'h-1' : 'h-0'
              } transition-all duration-300 bg-[#4296EE] w-full absolute bottom-0`}></div>
          </div>

          <div
            className='bg-[url("/assets/images/Kalam-Valley.jpg")] bg-cover bg-no-repeat h-[300px] md:h-[380px] lg:h-[450px] relative overflow-hidden'
            onMouseEnter={() => setShow('2nd')}
            onMouseLeave={() => setShow('')}>
            <div
              className={`absolute left-5 ${
                show === '2nd' ? 'bottom-4' : '-bottom-5'
              } transition-all duration-300 z-[2] flex flex-col gap-4`}>
              <p className='text-white font-semibold flex items-center gap-3'>
                <LuMapPin /> <span>Kalam Valley</span>
              </p>
              <p
                className='text-[#4296EE] text-xs font-semibold uppercase cursor-pointer'
                onClick={() => router.push('/tour-list')}>
                View All Tours
              </p>
            </div>
            <div className='bg-black opacity-0 hover:opacity-[0.6] duration-300 transition-all absolute top-0 h-[300px] md:h-[380px] lg:h-[450px] w-full'></div>
            <div
              className={` ${
                show === '2nd' ? 'h-1' : 'h-0'
              } transition-all duration-300 bg-[#4296EE] w-full absolute bottom-0`}></div>
          </div>
          <div
            className='bg-[url("/assets/images/Hunza-Valley.jpg")] bg-cover bg-no-repeat h-[300px] md:h-[380px] lg:h-[450px] relative overflow-hidden '
            onMouseEnter={() => setShow('3rd')}
            onMouseLeave={() => setShow('')}>
            <div
              className={`absolute left-5 ${
                show === '3rd' ? 'bottom-4' : '-bottom-5'
              } transition-all duration-300 z-[2] flex flex-col gap-4`}>
              <p className='text-white font-semibold flex items-center gap-3'>
                <LuMapPin /> <span>Hunza Valley</span>
              </p>
              <p
                className='text-[#4296EE] text-xs font-semibold uppercase cursor-pointer'
                onClick={() => router.push('/tour-list')}>
                View All Tours
              </p>
            </div>
            <div className='bg-black opacity-0 hover:opacity-[0.6] duration-300 transition-all absolute top-0 h-[300px] md:h-[380px] lg:h-[450px] w-full'></div>
            <div
              className={` ${
                show === '3rd' ? 'h-1' : 'h-0'
              } transition-all duration-300 bg-[#4296EE] w-full absolute bottom-0`}></div>
          </div>
          <div
            onMouseEnter={() => setShow('4th')}
            onMouseLeave={() => setShow('')}
            className='bg-[url("/assets/images/footer6.jpg")] bg-cover bg-no-repeat h-[300px] md:h-[380px] lg:h-[450px] relative overflow-hidden'>
            <div
              className={`absolute left-5 ${
                show === '4th' ? 'bottom-4' : '-bottom-5'
              } transition-all duration-300 z-[2] flex flex-col gap-4`}>
              <p className='text-white font-semibold flex items-center gap-3'>
                <LuMapPin /> <span>Islamabad City</span>
              </p>
              <p
                className='text-[#4296EE] text-xs font-semibold uppercase cursor-pointer'
                onClick={() => router.push('/tour-list')}>
                View All Tours
              </p>
            </div>
            <div className='bg-black opacity-0 hover:opacity-[0.6] duration-300 transition-all absolute top-0 h-[300px] md:h-[380px] lg:h-[450px] w-full'></div>
            <div
              className={` ${
                show === '4th' ? 'h-1' : 'h-0'
              } transition-all duration-300 bg-[#4296EE] w-full absolute bottom-0`}></div>
          </div>

          <div
            onMouseEnter={() => setShow('5th')}
            onMouseLeave={() => setShow('')}
            className='bg-[url("/assets/images/shadra.jpg")] bg-cover bg-no-repeat h-[300px] md:h-[380px] lg:h-[450px] relative overflow-hidden'>
            <div
              className={`absolute left-5 ${
                show === '5th' ? 'bottom-4' : '-bottom-5'
              } transition-all duration-300 z-[2] flex flex-col gap-4`}>
              <p className='text-white font-semibold flex items-center gap-3'>
                <LuMapPin /> <span>Kaghan & Naran Valley</span>
              </p>
              <p
                className='text-[#4296EE] text-xs font-semibold uppercase cursor-pointer'
                onClick={() => router.push('/tour-list')}>
                View All Tours
              </p>
            </div>
            <div className='bg-black opacity-0 hover:opacity-[0.6] duration-300 transition-all absolute top-0 h-[300px] md:h-[380px] lg:h-[450px] w-full'></div>
            <div
              className={` ${
                show === '5th' ? 'h-1' : 'h-0'
              } transition-all duration-300 bg-[#4296EE] w-full absolute bottom-0`}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchTour

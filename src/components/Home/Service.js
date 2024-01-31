import React from 'react'
import Image from 'next/image'
import Container from '../shared/Reuseables/Container'

function Service() {
  return (
    <div className='flex flex-row bg-[#468ae7] py-16 text-white w-full  items-center justify-center  space-x-[5px] '>
      <Container>
        <div className='grid  md:grid-cols-4 grid-cols-1 gap-5'>
          <div className='items-center justify-start flex  gap-4 '>
            <Image src='/assets/icons/airplane.png' alt='service' width={49} height={49} />
            <div>
              <h2 className='text-sm text-white'>+100 Destinations</h2>
              <span className='text-[#b9cdf3] text-sm'>Enjoy your tours</span>
            </div>
          </div>
          <div className='items-center justify-start flex  gap-4 '>
            <Image src='/assets/icons/cash.png' alt='service' width={49} height={49} />
            <div>
              <h2>Best price</h2>
              <span className='text-[#b9cdf3] text-sm'>special offers and discounts</span>
            </div>
          </div>
          <div className='items-center justify-start flex  gap-4 '>
            <Image src='/assets/icons/support.png' alt='service' width={49} height={49} />
            <div>
              <h2>Great Customer</h2>
              <span className='text-[#b9cdf3] text-sm'>we have a great customer</span>
            </div>
          </div>
          <div className='items-center justify-start flex  gap-4 '>
            <Image src='/assets/icons/schedule.png' alt='service' width={49} height={49} />
            <div>
              <h2>Fast booking</h2>
              <span className='text-[#b9cdf3] text-sm'>online booking</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Service

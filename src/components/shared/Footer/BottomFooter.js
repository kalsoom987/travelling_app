import React from 'react'
import Container from '../Reuseables/Container'
import { FaFacebookF, FaInstagram, FaRegCopyright } from 'react-icons/fa'

const BottomFooter = () => {
  return (
    <div className='bg-[#468ae7] flex justify-center items-center w-full py-4'>
      <Container>
        <div className='flex flex-items lg:flex-row flex-col justify-between w-full gap-2 lg:gap-0'>
          <p className='text-white flex justify-center lg:justify-start items-center gap-1 text-sm '>
            <FaRegCopyright /> 2023-24 Best Travelling Experience| All Rights Reserved
          </p>
          <div className='flex justify-center lg:justify-end gap-3 items-center text-white text-sm'>
            <span>Follow Us</span> <spa>|</spa>
            <div className='flex justify-end gap-3'>
              <FaFacebookF />
              <FaInstagram />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BottomFooter

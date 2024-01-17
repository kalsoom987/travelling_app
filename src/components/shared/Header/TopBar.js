import React from 'react'
import { FaPhoneAlt, FaRegEnvelope, FaUser } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import Container from '../Reuseables/Container'

const TopBar = () => {
  return (
    <div className='bg-black h-[40px] md:h-[60px] flex items-center justify-center'>
      <Container>
        <div className='flex justify-between items-center w-full'>
          <div className='hidden md:flex justify-start items-center gap-10'>
            <div className='flex justify-start items-center gap-3'>
              <FaPhoneAlt color='#ffffff' size={14} />{' '}
              <span className='text-[#ffffff] text-sm font-[300]'>+92 312 1283912</span>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <FaRegEnvelope color='#ffffff' size={14} />{' '}
              <span className='text-[#ffffff] text-sm font-[300]'>test@test.com</span>
            </div>
          </div>
          <div className='flex justify-start items-center gap-10'>
            <div className='flex justify-start items-center gap-3'>
              <FiLock color='#468ae7' size={14} />{' '}
              <span className='text-[#ffffff] text-xs md:text-sm font-semibold'>Login</span>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <FaUser color='#468ae7' size={14} />{' '}
              <span className='text-[#ffffff] text-xs md:text-sm font-semibold'>Sign Up</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar

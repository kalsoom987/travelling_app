import React from 'react'
import { FaPhoneAlt, FaRegEnvelope, FaUser } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import Container from '../Reuseables/Container'
import { useRouter } from 'next/navigation'

const TopBar = ({ pathname }) => {
  const router = useRouter()

  return (
    <div
      className={`${
        pathname === '/' ? 'bg-[rgba(0,0,0,0.7)]' : 'bg-black'
      } h-[40px] md:h-[60px] flex items-center justify-center`}>
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
            <div
              className='flex justify-start items-center gap-3 cursor-pointer'
              onClick={() => router.push('/auth/login')}>
              <FiLock color='#468ae7' size={14} />{' '}
              <span className='text-[#ffffff] text-xs md:text-sm font-semibold'>Login</span>
            </div>
            <div
              className='flex justify-start items-center gap-3 cursor-pointer'
              onClick={() => router.push('/auth/register')}>
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

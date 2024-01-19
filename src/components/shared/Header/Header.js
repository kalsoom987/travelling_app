'use client'

import React, { useState } from 'react'
import TopBar from './TopBar'
import Container from '../Reuseables/Container'
import { navbarRoutes } from '@/utils/navbarRoutes'
import { FaBars } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Sidebar from './Sidebar'
import { ReactSVG } from 'react-svg'

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [showSidebar, setShowSideBar] = useState(false)

  return (
    <div className='fixed top-0 z-[10] w-full'>
      <TopBar />
      <div className='bg-[rgba(47,47,47,0.7)] h-[60px] md:h-[85px] flex items-center justify-center'>
        <Container>
          <div className='flex justify-between items-center w-full'>
            <div className='w-1/2'>
              <div className='flex gap-2 items-center'>
                <ReactSVG src='/assets/logo.svg' className='h-6 w-6' />
                <span className='text-white text-[24px] font-bold'>TripPix</span>
              </div>
            </div>
            <div className='w-1/2 flex justify-end items-center gap-10'>
              <ul className='hidden md:flex items-center gap-6'>
                {navbarRoutes.map((x, i) => (
                  <li
                    onClick={() => router.push(x.path)}
                    className={`cursor-pointer font-semibold hover:text-[#468ae7] transition-all duration-300 ${
                      x.path === pathname ? 'text-[#468ae7]' : 'text-white'
                    }`}
                    key={i}>
                    {x.name}
                  </li>
                ))}
              </ul>
              <div className='w-8 h-8 md:hidden flex justify-center items-center border-[1px] border-white rounded-[4px]'>
                <FaBars color='#ffffff' size={20} onClick={() => setShowSideBar(true)} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Sidebar show={showSidebar} setShow={setShowSideBar} />
    </div>
  )
}

export default Header

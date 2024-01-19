'use client'

import React, { useEffect, useState } from 'react'
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
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      if (scrollY >= 300) {
        setShowHeader(true)
      } else if (scrollY <= 100) {
        setShowHeader(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${pathname === '/' ? 'absolute' : 'relative'} top-0 z-[10] w-full`}>
      <TopBar pathname={pathname} />
      <div
        className={`${
          pathname === '/' ? 'bg-[rgba(47,47,47,0.7)]' : 'bg-[rgb(47,47,47)]'
        } h-[60px] md:h-[85px] flex items-center justify-center`}>
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

      <div
        className={`bg-[rgb(47,47,47)] fixed top-0 ${
          showHeader ? 'h-[60px] md:h-[85px]' : 'h-0 md:h-0'
        }  flex items-center justify-center w-full overflow-hidden transition-all duration-300`}>
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

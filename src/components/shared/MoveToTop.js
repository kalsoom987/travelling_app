'use client'

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const MoveToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      if (scrollY >= 300) {
        setShow(true)
      } else if (scrollY <= 100) {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed bottom-5 sm:bottom-[40px] transition-all duration-200 right-5 sm:right-[40px] w-10 h-10 flex justify-center items-center rounded-full shadow-md cursor-pointer bg-white ${
        show ? 'scale-100' : 'scale-0'
      }`}
      onClick={scrollToTop}>
      <FaArrowUp color='#468ae7' size={22} />
    </div>
  )
}

export default MoveToTop

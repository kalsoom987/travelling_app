import { navbarRoutes } from '@/utils/navbarRoutes'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { FaChevronRight, FaTimes } from 'react-icons/fa'

const Sidebar = ({ show, setShow }) => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div
      className={`h-screen fixed top-0 right-0 bg-[#2f2f2f] ${
        show ? 'w-[300px] p-6' : 'w-0 p-0'
      } transition-all duration-300 block md:hidden`}>
      <div className='w-full'>
        <FaTimes size={16} color='#ffffff' onClick={() => setShow(false)} />
      </div>
      <ul className='flex flex-col gap-5 mt-10'>
        {navbarRoutes.map((x, i) => (
          <li
            key={i}
            onClick={() => router.push(x.path)}
            className={`flex items-center border-b-[1px] border-b-gray-500 pb-4 justify-between ${
              x.path === pathname ? 'text-[#468ae7]' : 'text-white'
            } font-semibold`}>
            <span>{x.name}</span>
            <span>
              <FaChevronRight color='#ffffff' size={14} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar

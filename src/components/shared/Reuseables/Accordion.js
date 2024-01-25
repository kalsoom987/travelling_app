import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Accordion = ({ show, setShow, title, accordionComponent }) => {
  return (
    <div className='w-full flex flex-col relative'>
      <div
        className='flex justify-between items-center py-3  hover:bg-[#468ae7] px-2 rounded-md'
        onClick={() => setShow((prev) => !prev)}>
        <p className='text-base font-semibold'>{title}</p>
        {!show ? <FaPlus /> : <FaMinus />}
      </div>
      <div
        className={`flex px-4 bg-[#468ae7] top-1 relative rounded-md ${
          show ? 'h-[100px] min-h-[50px]' : 'h-0 min-h-0'
        } duration-300 transition-all overflow-hidden`}>
        {accordionComponent}
      </div>
    </div>
  )
}

export default Accordion

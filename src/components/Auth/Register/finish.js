import Image from 'next/image'
import React from 'react'

const Finish = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Image src='/assets/icons/like.png' alt='like' height={100} width={100} className='py-10' />
      <p className='text-[#333333] text-[18px] text-center md:text-[24px] py-5'>
        Email has been sent to your account. Check inbox and verify your account!
      </p>
      <button
        onClick={() => handleStep('inc')}
        className='flex items-center  rounded-md px-10 py-2 mt-5 mb-10 justify-center text-white gap-2 duration-300 transition-all bg-[#6553F7] '>
        Login
      </button>
    </div>
  )
}

export default Finish

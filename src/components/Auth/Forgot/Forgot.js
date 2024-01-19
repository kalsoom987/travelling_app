'use client'

import Container from '../../shared/Reuseables/Container'
import Input from '@/components/shared/Reuseables/Input'

const Forgot = () => {
  return (
    <div className='w-full flex justify-center items-center py-16'>
      <Container>
        <div className='flex flex-col items-center w-full'>
          <p className='text-center text-black pb-2 text-3xl font-semibold'>Forgot Password</p>
          <p className='pb-8 text-sm text-center'>Enter your email here and then OTP will send to your email</p>
          <form className='grid grid-cols-1  pt-8 pb-3 gap-5 w-full md:w-[400px]  '>
            <Input
              label='Email'
              labelStyle='text-sm font-semibold text-[#333333]'
              inputType='email'
              inputStyle='w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
              placeholder='Enter your email'
              error={null}
            />
            <button className='bg-[#6553F7] py-3 text-white mt-4'>Send Email</button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Forgot

import React from 'react'
import Container from '../shared/Reuseables/Container'
import { FiSearch } from 'react-icons/fi'
import SearchInput from '../shared/Reuseables/SearchInput'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import SearchSelect from '../shared/Reuseables/SearchSelect'

const Banner = () => {
  return (
    <div className='hidden md:flex justify-center items-center h-[460px] w-full bg-no-repeat bg-center bg-cover absolute top-0 bg-[url("/assets/images/banner4.jpg")]'>
      <div className='absolute top-0 h-[460px] w-full bg-[rgba(0,0,0,0.5)]'>
        <div className='absolute bottom-10 w-full flex items-center justify-center'>
          <Container>
            <div className='flex flex-col gap-3 w-full'>
              <div className='flex justify-start items-center gap-3 '>
                <FiSearch className='text-gray-500 text-[24px]' />
                <h1 className='text-white text-[32px] font-bold'>Search Tours</h1>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-5 gap-3 items-end '>
                <SearchInput
                  label='Keywords'
                  labelStyle='text-white font-semibold'
                  divStyle='flex justify-between items-center bg-white p-3'
                  icon={<FaSearch className='text-gray-400' />}
                  inputStyle='focus:outline-none bg-transparent'
                />
                <SearchSelect
                  label='Activity'
                  labelStyle='text-white font-semibold'
                  inputStyle='focus:outline-none bg-transparent w-full flex justify-between items-center bg-white p-3'
                />
                <SearchSelect
                  label='Destination'
                  labelStyle='text-white font-semibold'
                  inputStyle='focus:outline-none bg-transparent w-full flex justify-between items-center bg-white p-3'
                />
                <SearchSelect
                  label='Duration'
                  labelStyle='text-white font-semibold'
                  inputStyle='focus:outline-none bg-transparent w-full flex justify-between items-center bg-white p-3'
                />
                <button className='bg-[#468ae7] w-full text-white h-12'>Search</button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Banner

import React, { useState } from 'react'
import Input from '../../shared/Reuseables/Input'
import { GoDotFill } from 'react-icons/go'
import 'react-datepicker/dist/react-datepicker.css'
import TextArea from '@/components/shared/Reuseables/TextArea'
import SearchDropdown from '@/components/shared/Reuseables/SearchDropdown'
import { countryList } from '@/utils/countryData'

const StepTwoForm = () => {
  const [countryDrop, setCountryDrop] = useState(false)
  const [selectCountry, setSelectCountry] = useState('Select Country')
  const [search, setSearch] = useState('')
  const countryFormat = countryList.map((x) => {
    return { label: x, value: x }
  })
  const [countryData, setCountryData] = useState(countryFormat)
  const [defaultData, setDefaultData] = useState(countryFormat)

  const handleSearch = (e) => {
    const searchQuery = e.target.value
    setSearch(searchQuery)
    if (!searchQuery) {
      setCountryData(defaultData)
    } else {
      setCountryData(
        countryData.filter((item) => {
          return item.label.toLowerCase().includes(searchQuery.toLowerCase())
        })
      )
    }
  }

  const handleCountry = (e, value) => {
    e.stopPropagation()
    setCountryDrop(false)
    setSelectCountry(value)
  }

  return (
    <form className='flex flex-col w-full py-10 gap-5'>
      <div className='grid grid-cols-1 w-full gap-5'>
        <TextArea
          label='Current Address'
          labelStyle='text-sm font-semibold text-[#333333]'
          inputStyle='w-full focus:outline-none resize-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
          placeholder='Enter your current address'
          error={null}
        />
        <TextArea
          label='Shipping Address'
          labelStyle='text-sm font-semibold text-[#333333]'
          inputStyle='w-full focus:outline-none resize-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
          placeholder='Enter your shipping address'
          error={null}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-5'>
        <Input
          label='City'
          labelStyle='text-sm font-semibold text-[#333333]'
          inputType='text'
          inputStyle='w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
          placeholder='Enter your city'
          error={null}
        />
        <div
          className='flex flex-col gap-1'
          onClick={() => {
            setCountryDrop((prev) => !prev)
          }}>
          <p className='text-sm font-semibold text-[#333333]'>Country</p>
          <SearchDropdown
            show={countryDrop}
            setShow={setCountryDrop}
            parentStyle='flex items-center w-full'
            setSelect={handleCountry}
            isIcon={false}
            parentText={selectCountry}
            parentTextStyle='text-gray-400 capitalize text-sm font-[300] border-[1px] border-gray-300 px-3 md:px-4 py-3 w-full flex justify-between items-center'
            data={countryData}
            parentTextIcon={selectCountry}
            childStyle={`w-full bg-white top-[40px] ${
              countryDrop ? 'border-[1px]' : 'border-0'
            } border-gray-200 shadow-md z-[10]`}
            listStyle='flex flex-col gap-2 h-[250px] overflow-y-auto'
            listItemStyle='text-[#333333] text-sm font-[300] flex items-center gap-2 cursor-pointer'
            listIcon={<GoDotFill size={12} />}
            dropHeight='92px'
            handleChange={handleSearch}
            value={search}
          />
        </div>
      </div>
    </form>
  )
}

export default StepTwoForm

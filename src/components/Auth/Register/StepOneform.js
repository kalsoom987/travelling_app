import React from 'react'
import Input from '../../shared/Reuseables/Input'
import Dropdown from '../../shared/Reuseables/Dropdown'
import { GoDotFill } from 'react-icons/go'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'

const StepOneForm = ({
  selectGen,
  startDate,
  setStartDate,
  genderDrop,
  setGenderDrop,
  handleGender,
  setTogglePass,
  togglePass,
}) => {
  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ]

  return (
    <form className='grid grid-cols-1 md:grid-cols-2 w-full py-10 gap-5'>
      <Input
        label='First Name'
        labelStyle='text-sm font-semibold text-[#333333]'
        inputType='text'
        inputStyle='w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
        placeholder='Enter your first name'
        error={null}
      />
      <Input
        label='Last Name'
        labelStyle='text-sm font-semibold text-[#333333]'
        inputType='text'
        inputStyle='w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
        placeholder='Enter your last name'
        error={null}
      />
      <Input
        label='Email'
        labelStyle='text-sm font-semibold text-[#333333]'
        inputType='email'
        inputStyle='w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
        placeholder='Enter your email'
        error={null}
      />
      <Input
        label='Phone'
        labelStyle='text-sm font-semibold text-[#333333]'
        inputType='text'
        inputStyle='w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
        placeholder='Enter your phone'
        error={null}
      />
      <div
        className='flex flex-col gap-1'
        onClick={() => {
          setGenderDrop((prev) => !prev)
        }}>
        <p className='text-sm font-semibold text-[#333333]'>Gender</p>
        <Dropdown
          show={genderDrop}
          setShow={setGenderDrop}
          parentStyle='flex items-center w-full'
          setSelect={handleGender}
          isIcon={false}
          parentText={selectGen}
          parentTextStyle='text-gray-400 capitalize text-sm font-[300] border-[1px] border-gray-300 px-3 md:px-4 py-3 w-full flex justify-between items-center'
          data={genders}
          parentTextIcon={selectGen}
          childStyle={`w-full bg-white top-[40px] ${
            genderDrop ? 'border-[1px]' : 'border-0'
          } border-gray-200 shadow-md z-[10]`}
          listStyle='flex flex-col gap-2'
          listItemStyle='text-[#333333] text-sm font-[300] flex items-center gap-2 cursor-pointer'
          listIcon={<GoDotFill size={12} />}
          dropHeight='92px'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-sm font-semibold text-[#333333]'>Date of birth</p>
        <DatePicker selected={startDate} placeholderText='Select DOB' onChange={(date) => setStartDate(date)} />
      </div>
      <Input
        label='Password'
        labelStyle='text-sm font-semibold text-[#333333]'
        inputType={togglePass ? 'text' : 'password'}
        inputStyle='w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
        placeholder='Enter your password'
        error={null}
        toggleIcon={togglePass ? <IoEyeOffOutline /> : <IoEyeOutline />}
        handleToggle={() => setTogglePass((prev) => !prev)}
      />
      <Input
        label='Confirm Password'
        labelStyle='text-sm font-semibold text-[#333333]'
        inputType={togglePass ? 'text' : 'password'}
        inputStyle='w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3'
        placeholder='Confirm your password'
        error={null}
        toggleIcon={togglePass ? <IoEyeOffOutline /> : <IoEyeOutline />}
        handleToggle={() => setTogglePass((prev) => !prev)}
      />
    </form>
  )
}

export default StepOneForm

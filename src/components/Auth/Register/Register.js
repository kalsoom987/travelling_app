'use client'

import React, { useState } from 'react'
import Container from '../../shared/Reuseables/Container'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import StepOneForm from './StepOneForm'
import StepTwoForm from './StepTwoForm'
import Finish from './Finish'
import Link from 'next/link'

const Register = () => {
  const [step, setStep] = useState(1)
  const [genderDrop, setGenderDrop] = useState(false)
  const [selectGen, setSelectGen] = useState('Select Gender')
  const [dob, setDob] = useState(null)
  const [togglePass, setTogglePass] = useState(false)

  const handleGender = (e, value) => {
    e.stopPropagation()
    setGenderDrop(false)
    setSelectGen(value)
  }

  const handleStep = (type) => {
    if (type === 'inc') {
      setStep(() => step + 1)
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    } else if (type === 'dec') {
      if (step > 0) {
        setStep(() => step - 1)
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className='w-full flex justify-center items-center py-16'>
      <Container>
        <div className='flex flex-col items-center w-full'>
          <p className='text-center text-black pb-2 text-3xl font-semibold'>Register</p>
          <p className='pb-8'>
            Already have an account?{' '}
            <Link className='text-[#6553F7] font-semibold' href='/auth/login'>
              Log in
            </Link>
          </p>
          <div className='flex w-full items-center justify-center'>
            <p className='w-10 h-10 bg-[#6553F7] text-white flex justify-center items-center font-semibold rounded-full'>
              1
            </p>
            <div
              className={`w-[100px] h-[2px] ${
                step > 1 ? 'bg-[#6553F7]' : 'bg-[#d9d9d9]'
              } duration-300 transition-all`}></div>
            <p
              className={`w-10 h-10 ${
                step > 1 ? 'bg-[#6553F7]' : 'bg-[#d9d9d9]'
              } duration-300 transition-all  text-white flex justify-center items-center font-semibold rounded-full`}>
              2
            </p>
            <div
              className={`w-[100px] h-[2px] ${
                step > 2 ? 'bg-[#6553F7]' : 'bg-[#d9d9d9]'
              } duration-300 transition-all`}></div>
            <p
              className={`w-10 h-10 ${
                step > 2 ? 'bg-[#6553F7]' : 'bg-[#d9d9d9]'
              } text-white flex justify-center items-center font-semibold rounded-full duration-300 transition-all`}>
              3
            </p>
          </div>
          {step === 1 && (
            <StepOneForm
              selectGen={selectGen}
              startDate={dob}
              setStartDate={setDob}
              genderDrop={genderDrop}
              setGenderDrop={setGenderDrop}
              handleGender={handleGender}
              setTogglePass={setTogglePass}
              togglePass={togglePass}
            />
          )}
          {step === 2 && <StepTwoForm />}
          {step === 3 && <Finish />}
          {step < 3 && (
            <div className='w-full flex justify-between items-center'>
              <button
                onClick={() => handleStep('dec')}
                className={` ${
                  step > 1 ? 'opacity-1 hover:bg-[#6553F7] hover:text-white' : 'opacity-[0.3] cursor-not-allowed'
                } flex items-center  rounded-md px-4 py-2 justify-center text-[#333333] gap-2 duration-300 transition-all `}>
                <FaChevronLeft /> <span>Back</span>
              </button>
              <button
                onClick={() => handleStep('inc')}
                className='flex items-center  rounded-md px-4 py-2 justify-center text-[#6553F7] gap-2 duration-300 transition-all hover:bg-[#6553F7] hover:text-white'>
                Continue <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Register

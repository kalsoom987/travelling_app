'use client'

import React, { useState } from 'react'
import Container from '../Reuseables/Container'
import Image from 'next/image'
import { Information, myAccount, storeInformation } from '@/utils/footerRoutes'
import Accordion from '../Reuseables/Accordion'
import { AccountInformation, StoreInformation, WebsiteInformation } from './MobileAccordionData'
import BottomFooter from './BottomFooter'

const Footer = () => {
  const [infoShow, setInfoShow] = useState(false)
  const [accountShow, setAccountShow] = useState(false)
  const [storeShow, setStoreShow] = useState(false)

  const handleDropdowns = () => {
    if (infoShow) {
      setAccountShow(false)
      setStoreShow(false)
    } else if (accountShow) {
      setInfoShow(false)
      setStoreShow(false)
    } else if (storeShow) {
      setAccountShow(false)
      setInfoShow(false)
    }
  }

  return (
    <>
      <div className='w-full hidden flex-col lg:flex justify-center items-center py-16  bg-[#fcfcfc] '>
        <Container>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-3 w-1/4'>
              <p className='text-[#333333] font-bold text-[24px] lg:text-[32px]'>Logo Here</p>
              <h3 className='text-gray-400'>Best place for purchasing your hardware accessories</h3>
              <div className='flex flex-col gap-1 mt-5'>
                <p>Accepted Payment Methods</p>
                <div className='flex items-center gap-3'>
                  <Image src='/assets/icons/card.png' alt='card' width={50} height={50} />
                  <Image src='/assets/icons/visa.png' alt='visa' width={50} height={50} />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 w-1/4'>
              <p className='text-[#333333] font-bold text-[18px]'>My Account</p>
              <ul className='flex flex-col gap-2 mt-3'>
                {myAccount.map((x, i) => {
                  return (
                    <li
                      className='text-[#333333] text-sm cursor-pointer hover:text-[#6453f7] transition-all duration-300'
                      key={i}>
                      {x.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-3 w-1/4'>
              <p className='text-[#333333] font-bold text-[18px]'>Information</p>
              <ul className='flex flex-col gap-2 mt-3'>
                {Information.map((x, i) => {
                  return (
                    <li
                      className='text-[#333333] text-sm cursor-pointer hover:text-[#6453f7] transition-all duration-300'
                      key={i}>
                      {x.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-3 w-1/4'>
              <p className='text-[#333333] font-bold text-[18px]'>Store Information</p>
              <ul className='flex flex-col gap-2 mt-3'>
                {storeInformation.map((x, i) => {
                  return (
                    <li
                      className='text-[#333333] flex items-center justify-start gap-2 text-sm cursor-pointer hover:text-[#6453f7] transition-all duration-300'
                      key={i}>
                      <span>{x.icon}</span> <span>{x.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className='w-full lg:hidden flex justify-center items-center py-10 bg-[#fcfcfc]'>
        <Container>
          <div className='flex justify-between flex-col w-full'>
            <div className='flex flex-col gap-3 w-full'>
              <p className='text-[#333333] font-bold text-[24px] lg:text-[32px]'>Logo Here</p>
              <h3 className='text-gray-400'>Best place for purchasing your hardware accessories</h3>
              <div className='flex flex-col gap-1 mt-5'>
                <p>Accepted Payment Methods</p>
                <div className='flex items-center gap-3'>
                  <Image src='/assets/icons/card.png' alt='card' width={50} height={50} />
                  <Image src='/assets/icons/visa.png' alt='visa' width={50} height={50} />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-5'>
              <Accordion
                show={accountShow}
                setShow={setAccountShow}
                title='My Account'
                accordionComponent={<AccountInformation />}
              />
              <Accordion
                show={infoShow}
                setShow={setInfoShow}
                title='Information'
                accordionComponent={<WebsiteInformation />}
              />
              <Accordion
                show={storeShow}
                setShow={setStoreShow}
                title='Store Information'
                accordionComponent={<StoreInformation />}
              />
            </div>
          </div>
        </Container>
      </div>
      <BottomFooter />
    </>
  )
}

export default Footer

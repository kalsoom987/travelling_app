'use client'

import React, { useState } from 'react'
import Container from '../Reuseables/Container'
import Image from 'next/image'
import { Information, myAccount, storeInformation } from '@/utils/footerRoutes'
import Accordion from '../Reuseables/Accordion'
import { AccountInformation, StoreInformation, WebsiteInformation } from './MobileAccordionData'
import BottomFooter from './BottomFooter'
import { ReactSVG } from 'react-svg'

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
      <div className='w-full hidden flex-col lg:flex justify-center items-center py-16 bg-[rgb(47,47,47)] '>
        <Container>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-3 w-1/3'>
              <div className='text-[hsl(0,7%,94%)] font-bold text-[16px] lg:text-[32px] flex gap-2'>
                {' '}
                <ReactSVG src='/assets/logo.svg' className='h-6 w-6 py-2' />
                <span>TripPix</span>
              </div>
              <h3 className='text-gray-400'>
                Embark on a hassle-free journey through our intuitive travel website, offering curated destinations and
                seamless itineraries. Your dream adventure awaits, just a click away.
              </h3>
            </div>
            {/* <div className='flex flex-col gap-3 w-1/3'>
              <p className='text-[#333333] font-bold text-[18px]'>My Account</p>
              <ul className='flex flex-col gap-2 mt-3'>
                {myAccount.map((x, i) => {
                  return (
                    <li
                      className='text-[#333333] text-sm cursor-pointer hover:text-[#468ae7] transition-all duration-300'
                      key={i}>
                      {x.name}
                    </li>
                  )
                })}
              </ul>
            </div> */}
            <div className='flex flex-col gap-7 w-1/3 mb-40'>
              <p className='text-white font-bold text-[18px]'>Top Destinies</p>
              <div className='flex gap-7 '>
                <Image src='/assets/images/footer1.jpg' alt='footerimage' width={80} height={150} />
                <Image src='/assets/images/footer2.jpg' alt='footerimage' width={80} height={150} />
                <Image src='/assets/images/footer3.jpg' alt='footerimage' width={80} height={150} />
              </div>
              <div className='flex gap-7'>
                <Image src='/assets/images/footer4.jpg' alt='footerimage' width={80} height={150} />
                <Image src='/assets/images/footer5.jpg' alt='footerimage' width={80} height={150} />
                <Image src='/assets/images/footer6.jpg' alt='footerimage' width={80} height={150} />
              </div>
              {/* <ul className='flex flex-col gap-2 mt-3'>
                {Information.map((x, i) => {
                  return (
                    <li
                      className='text-[#333333] text-sm cursor-pointer hover:text-[#468ae7] transition-all duration-300'
                      key={i}>
                      {x.name}
                    </li>
                  )
                })}
              </ul> */}
            </div>
            <div className='flex flex-col gap-3 w-1/3'>
              <p className='text-white font-bold text-[18px]'>contact info</p>
              <ul className='flex flex-col gap-2 mt-3'>
                {storeInformation.map((x, i) => {
                  return (
                    <li
                      className='text-white flex items-center justify-start gap-2 text-sm cursor-pointer hover:text-[#468ae7] transition-all duration-300'
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
      <div className='w-full lg:hidden flex justify-center items-center py-10 bg-[rgb(47,47,47)] text-white'>
        <Container>
          <div className='flex justify-between flex-col w-full'>
            <div className='flex flex-col gap-3 w-full'>
              <p className='text-[#fcfcfc] font-bold text-[24px] lg:text-[32px]'></p>
              <h3 className='text-gray-400'>
                Embark on a hassle-free journey through our intuitive travel website. Your dream adventure awaits, just
                a click away.
              </h3>
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
                title='About us'
                accordionComponent={<WebsiteInformation />}
              />
              <Accordion
                show={storeShow}
                setShow={setStoreShow}
                title='Contact Information'
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

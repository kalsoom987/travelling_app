import { Information, myAccount, storeInformation } from '@/utils/footerRoutes'
import React from 'react'

const StoreInformation = () => {
  return (
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
  )
}

const WebsiteInformation = () => {
  return (
    <ul className='flex flex-col gap-2 mt-3'>
      {Information.map((x, i) => {
        return (
          <li
            className='text-[#333333] text-sm cursor-pointer hover:text-[#468ae7] transition-all duration-300'
            key={i}>
            {x.name}
          </li>
        )
      })}
    </ul>
  )
}

const AccountInformation = () => {
  return (
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
  )
}

export { AccountInformation, WebsiteInformation, StoreInformation }

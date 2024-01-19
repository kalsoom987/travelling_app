import React from 'react'
import { FaCheck, FaChevronDown } from 'react-icons/fa'

const Dropdown = ({
  show,
  setShow,
  parentStyle,
  parentTextIcon,
  parentText,
  parentTextStyle,
  childStyle,
  data,
  listItemStyle,
  listStyle,
  listIcon,
  setSelect,
  dropHeight,
  isIcon,
}) => {
  return (
    <div className={`relative ${parentStyle}`}>
      <p className={`${parentTextStyle} flex items-center gap-2 cursor-pointer`}>
        {isIcon && <span className='font-semibold'>{parentTextIcon}</span>} {parentText}{' '}
        <FaChevronDown className={`${show ? 'rotate-180' : 'rotate-0'} transition-all duration-200`} />
      </p>
      <div
        className={`absolute ${childStyle} ${
          show ? `h-${dropHeight} p-2` : 'h-0 p-0'
        } overflow-hidden transition-all duration-200`}>
        <ul className={listStyle}>
          {data.map((x, i) => (
            <li
              className={listItemStyle}
              key={i}
              onClick={(e) => {
                setSelect(e, x.value)
              }}>
              <span className='w-3'>{x.value === parentTextIcon && listIcon}</span> {x.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown

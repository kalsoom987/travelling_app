import React from 'react'

const SearchInput = ({ label, inputStyle, divStyle, icon, labelStyle }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className={labelStyle} htmlFor={label}>
        {label}
      </label>
      <div className={divStyle}>
        <input type='text' className={inputStyle} />
        <span>{icon}</span>
      </div>
    </div>
  )
}

export default SearchInput

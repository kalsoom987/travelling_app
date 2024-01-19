import React from 'react'

const Input = ({ label, labelStyle, inputType, inputStyle, placeholder, error, toggleIcon, handleToggle }) => {
  return (
    <div className='flex flex-col gap-1 relative'>
      <label className={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input type={inputType} id={label} placeholder={placeholder} className={inputStyle} />
      <div onClick={handleToggle} className='absolute right-3 top-10 cursor-pointer'>
        {toggleIcon}
      </div>
      {error && <p className='text-xs text-red-500'>{error}</p>}
    </div>
  )
}

export default Input

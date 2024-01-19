import React from 'react'

const TextArea = ({ label, labelStyle, inputStyle, placeholder, error, toggleIcon, handleToggle }) => {
  return (
    <div className='flex flex-col gap-1 relative'>
      <label className={labelStyle} htmlFor={label}>
        {label}
      </label>
      <textarea rows={4} id={label} placeholder={placeholder} className={inputStyle}></textarea>
      {error && <p className='text-xs text-red-500'>{error}</p>}
    </div>
  )
}

export default TextArea

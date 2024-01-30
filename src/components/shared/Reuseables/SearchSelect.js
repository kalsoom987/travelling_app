import React from 'react'

const SearchSelect = ({ label, inputStyle, divStyle, icon, labelStyle }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className={labelStyle} htmlFor={label}>
        {label}
      </label>
      <select type='text' className={inputStyle}>
        <option value=''>Any</option>
      </select>
    </div>
  )
}

export default SearchSelect

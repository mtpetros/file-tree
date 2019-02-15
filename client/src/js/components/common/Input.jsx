import React from 'react'

const Input = (props) => {
  const {
    label,
    type,
    name,
    value,
    min,
    max,
    handleChange
  } = props

  return (
    <div className='input'>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default Input

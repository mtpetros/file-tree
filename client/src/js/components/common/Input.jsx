import React from 'react'

const Input = (props) => {
  const {
    label,
    type,
    name,
    value,
    setKey
  } = props

  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target

    setKey(name, value)
    e.preventDefault()
  }

  return (
    <div className='input'>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default Input

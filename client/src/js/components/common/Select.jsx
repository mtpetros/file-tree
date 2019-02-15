import React from 'react'

const mapOptions = (option) => {
  const {
    value,
    label
  } = option

  return (
    <option value={value}>
      {label}
    </option>
  )
}

const Select = (props) => {
  const {
    opts,
    value,
    handleChange
  } = props

  return (
    <select
      value={value}
      onChange={handleChange}
    >
      {opts.map(mapOptions)}
    </select>
  )
}

export default Select

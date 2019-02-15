import React from 'react'

const Button = (props) => {
  const {
    onClick,
    label
  } = props

  return (
    <button
      type='button'
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button

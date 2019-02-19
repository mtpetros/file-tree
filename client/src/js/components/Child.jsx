import React from 'react'

const Child = (props) => {
  const {
    number
  } = props

  return (
    <div className='item'>
      <div className='node'>
        {number}
      </div>
    </div>
  )
}

export default Child

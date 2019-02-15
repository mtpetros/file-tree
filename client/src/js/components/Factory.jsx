import React from 'react'

const Factory = (props) => {
  const {
    factory: {
      name = 'factory'
    }
  } = props

  return (
    <div className='factory'>
      {name}
    </div>
  )
}

export default Factory

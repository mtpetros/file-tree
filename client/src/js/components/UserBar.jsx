import React from 'react'

const UserBar = (props) => {
  const {
    user
  } = props

  return (
    <div className='user-bar'>
      <div className='user-icon'>
        <i className='material-icons'>face</i>
      </div>
    </div>
  )
}

export default UserBar

import React from 'react'

import Menu from './Menu'

const FactoryMenu = (props) => {
  const {
    setIsVisible,
    socket
  } = props

  return (
    <Menu
      type='factory'
      setIsVisible={setIsVisible}
      socket={socket}
    />
  )
}

export default FactoryMenu

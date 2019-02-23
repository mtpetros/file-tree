import React from 'react'

import Menu from './Menu'

const FactoryMenu = (props) => {
  const {
    setIsVisible,
    socket,
    position
  } = props

  return (
    <Menu
      type='factory'
      setIsVisible={setIsVisible}
      socket={socket}
      position={position}
    />
  )
}

export default FactoryMenu

import React from 'react'

import Menu from './Menu'

const NodeMenu = (props) => {
  const {
    factory,
    setIsVisible,
    socket,
    position
  } = props

  return (
    <Menu
      type='node'
      factory={factory}
      setIsVisible={setIsVisible}
      socket={socket}
      position={position}
    />
  )
}

export default NodeMenu

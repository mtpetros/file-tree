import React from 'react'

import Menu from './Menu'

const NodeMenu = (props) => {
  const {
    factory,
    setIsVisible,
    socket
  } = props

  return (
    <Menu
      type='node'
      factory={factory}
      setIsVisible={setIsVisible}
      socket={socket}
    />
  )
}

export default NodeMenu

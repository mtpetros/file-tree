import React, { useState } from 'react'

import ModalWrapper from 'Components/common/ModalWrapper'
import FactoryMenu from 'Components/FactoryMenu'

const NodeRoot = (props) => {
  const [
    isVisible,
    setIsVisible
  ] = useState(false)

  const {
    socket
  } = props

  const handleClick = () => setIsVisible(true)

  return (
    <div className='node-root'>
      <div
        className='node node-root'
        onClick={handleClick}
      >
        <span>Node Root</span>
      </div>
      <ModalWrapper
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        <FactoryMenu
          setIsVisible={setIsVisible}
          socket={socket}
        />
      </ModalWrapper>
    </div>
  )
}

export default NodeRoot

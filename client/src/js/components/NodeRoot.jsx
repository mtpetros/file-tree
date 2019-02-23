import React, { useState } from 'react'

import ModalWrapper from 'Components/common/ModalWrapper'
import FactoryMenu from 'Components/FactoryMenu'

const NodeRoot = (props) => {
  const [
    isVisible,
    setIsVisible
  ] = useState(false)

  const [
    position,
    setPosition
  ] = useState([])

  const {
    socket
  } = props

  const handleViewModal = (e) => {
    const x = e.clientX
    const y = e.clientY

    setIsVisible(true)
    setPosition([x, y])
  }

  const nodeClass = 'node node-root'
  const nodeActiveClass = isVisible ? `${nodeClass} active` : nodeClass

  return (
    <>
      <div
        className={nodeActiveClass}
        onClick={handleViewModal}
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
          position={position}
        />
      </ModalWrapper>
    </>
  )
}

export default NodeRoot

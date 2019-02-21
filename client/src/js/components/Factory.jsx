import React, { useState } from 'react'

import Child from 'Components/Child'
import NodeMenu from 'Components/NodeMenu'
import ModalWrapper from 'Components/common/ModalWrapper'

const renderChildren = (number, i) => {
  return (
    <Child
      number={number}
      key={i}
    />
  )
}

const Factory = (props) => {
  const [
    isVisible,
    setIsVisible
  ] = useState(false)

  const {
    factory,
    socket
  } = props

  const {
    name,
    children = [],
    top,
    bottom
  } = factory

  const range = `${bottom} : ${top}`

  const handleViewModal = () => setIsVisible(true)

  return (
    <div className='item'>
      <ModalWrapper
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        <NodeMenu
          setIsVisible={setIsVisible}
          factory={factory}
          socket={socket}
        />
      </ModalWrapper>
      <div
        className='factory'
        onClick={handleViewModal}
      >
        <div className='node'>
          {name}
        </div>
        <div className='range'>
          {range}
        </div>
      </div>
      {children.map(renderChildren)}
    </div>
  )
}

export default Factory

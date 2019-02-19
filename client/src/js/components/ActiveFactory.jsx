import React, { useState } from 'react'

import Child from 'Components/Child'
import NodeMenu from 'Components/NodeMenu'
import ModalWrapper from 'Components/common/ModalWrapper'

import ActiveFactoryContainer from 'Containers/activeFactory'

const renderChildren = (number, i) => {
  return (
    <Child
      number={number}
      key={i}
    />
  )
}

const ActiveFactory = (props) => {
  const [
    isVisible,
    setIsVisible
  ] = useState(false)

  const {
    factory,
    activeFactory,
    setFactory

  } = props

  const {
    name,
    children = [],
    top,
    bottom,
    amount,
    id
  } = factory

  const range = `${bottom} : ${top}`

  const handleViewModal = () => setIsVisible(true)

  return (
    <div className='item'>
      <ModalWrapper
        isVisible={isVisible}
      >
        <NodeMenu
          setIsVisible={setIsVisible}
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

const withActiveFactory = ActiveFactoryContainer(ActiveFactory)
export default withActiveFactory

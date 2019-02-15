import React from 'react'

const NodeRoot = (props) => {
  const {
    handleViewModal
  } = props

  const handleClick = () => handleViewModal(true)

  return (
    <div
      className='node node-root'
      onClick={handleClick}
    >
      Node Root
    </div>
  )
}

export default NodeRoot

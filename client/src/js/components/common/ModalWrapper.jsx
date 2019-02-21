import React from 'react'

const ModalWrapper = (props) => {
  const {
    children,
    isVisible = false,
    setIsVisible
  } = props

  const handleSetHidden = (e) => {
    setIsVisible(false)
  }

  if (isVisible) {
    return (
      <div
        className='modal-wrapper'
        onClick={handleSetHidden}
      >
        {children}
      </div>
    )
  }

  return null
}

export default ModalWrapper

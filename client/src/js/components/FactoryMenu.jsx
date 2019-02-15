import React from 'react'

import Input from 'Components/common/Input'
import Button from 'Components/common/Button'

const handleOnCancel = (setIsVisible) => {
  return () => setIsVisible(false)
}

const handleOnConfirm = () => null

const FactoryMenu = (props) => {
  const {
    factory = {},
    setIsVisible
  } = props

  const {
    name,
    bottom,
    top,
    amount
  } = factory

  return (
    <div className='factory-menu'>
      <Input
        label='factory name'
        type='text'
        name='name'
        value={name}
      />
      <Input
        label='range bottom'
        type='number'
        name='bottom'
        value={bottom}
      />
      <Input
        label='range top'
        type='number'
        name='top'
        value={top}
      />
      <Input
        label='number of children'
        type='number'
        name='amount'
        value={amount}
        min='0'
        max='15'
      />
      <div className='button-group'>
        <Button
          label='confirm'
          onClick={handleOnConfirm}
        />
        <Button
          label='cancel'
          onClick={handleOnCancel(setIsVisible)}
        />
      </div>
    </div>
  )
}

export default FactoryMenu

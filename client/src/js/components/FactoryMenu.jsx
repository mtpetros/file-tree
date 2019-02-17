import React from 'react'

import factoryContainer from 'Containers/factory'

import Input from 'Components/common/Input'
import Button from 'Components/common/Button'

const handleOnCancel = (setIsVisible) => {
  return () => setIsVisible(false)
}

const handleOnConfirm = (factory, createFactory) => {
  return (e) => {
    createFactory(factory)
    e.preventDefault()
  }
}

const FactoryMenu = (props) => {
  const {
    factory = {},
    setIsVisible,
    createFactory,
    setKey
  } = props

  const {
    name,
    bottom,
    top,
    amount
  } = factory

  console.log(props)

  return (
    <div className='factory-menu'>
      <Input
        label='factory name'
        type='text'
        name='name'
        value={name}
        setKey={setKey}
      />
      <Input
        label='range bottom'
        type='text'
        name='bottom'
        value={bottom}
        setKey={setKey}
      />
      <Input
        label='range top'
        type='text'
        name='top'
        value={top}
        setKey={setKey}
      />
      <Input
        label='number of children'
        type='text'
        name='amount'
        value={amount}
        setKey={setKey}
      />
      <div className='button-group'>
        <Button
          label='confirm'
          onClick={handleOnConfirm(factory, createFactory)}
        />
        <Button
          label='cancel'
          onClick={handleOnCancel(setIsVisible)}
        />
      </div>
    </div>
  )
}

const withFactory = factoryContainer(FactoryMenu)
export default withFactory

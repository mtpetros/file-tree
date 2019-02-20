import React, { Component } from 'react'

import ActiveFactoryContainer from 'Containers/activeFactory'

import Input from 'Components/common/Input'
import Button from 'Components/common/Button'

const handleOnCancel = (setIsVisible) => {
  return () => setIsVisible(false)
}

class FactoryMenu extends Component {
  constructor (props) {
    super(props)

    this.renderNumberOfChildren = this.renderNumberOfChildren.bind(this)
  }

  componentDidMount () {
    const {
      type,
      setFactory,
      factory
    } = this.props

    if (type === 'node') {
      setFactory(factory)
    }
  }

  componentWillUnmount () {
    const {
      resetFactory
    } = this.props

    resetFactory()
  }

  renderNumberOfChildren () {
    const {
      type,
      activeFactory = {},
      setKey
    } = this.props

    const { amount } = activeFactory

    if (type === 'factory') {
      return (
        <Input
          label='number of children'
          type='text'
          name='amount'
          value={amount}
          setKey={setKey}
        />
      )
    }

    return null
  }

  render () {
    const {
      type,
      activeFactory = {},
      setIsVisible,
      createFactory,
      updateFactory,
      setKey
    } = this.props

    const {
      name,
      bottom,
      top
    } = activeFactory

    const handleOnConfirm = (e) => {
      if (type === 'factory') {
        createFactory(activeFactory)
        e.preventDefault()
      }

      updateFactory(activeFactory.id, activeFactory)
      e.preventDefault()
    }

    const menuClass = type === 'factory' ? 'factory-menu' : 'node-menu'

    return (
      <div className={menuClass}>
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
        {this.renderNumberOfChildren()}
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
}

const withActiveFactory = ActiveFactoryContainer(FactoryMenu)
export default withActiveFactory

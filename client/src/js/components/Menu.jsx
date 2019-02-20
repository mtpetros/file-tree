import React, { Component } from 'react'

import ActiveFactoryContainer from 'Containers/activeFactory'
import FactoriesContainer from 'Containers/factories'

import Input from 'Components/common/Input'
import Button from 'Components/common/Button'

import io from 'socket.io-client'

const socket = io()

const handleOnCancel = (setIsVisible) => {
  return () => setIsVisible(false)
}

class FactoryMenu extends Component {
  constructor (props) {
    super(props)

    this.renderNumberOfChildren = this.renderNumberOfChildren.bind(this)
    this.createOrUpdateFactory = this.createOrUpdateFactory.bind(this)
    this.handleOnConfirm = this.handleOnConfirm.bind(this)
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

  createOrUpdateFactory () {
    const {
      type,
      createFactory,
      updateFactory,
      activeFactory
    } = this.props

    if (type === 'factory') {
      return createFactory(activeFactory)
    }

    return updateFactory(activeFactory.id, activeFactory)
  }

  handleOnConfirm (e) {
    const {
      getAllFactories,
      setIsVisible
    } = this.props

    setIsVisible(false)
    this.createOrUpdateFactory()
      .then(() => socket.emit('factory updated'))
      .then(getAllFactories)
  }

  render () {
    const {
      type,
      activeFactory = {},
      setIsVisible,
      setKey
    } = this.props

    const {
      name,
      bottom,
      top
    } = activeFactory

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
            onClick={this.handleOnConfirm}
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
const withFactories = FactoriesContainer(withActiveFactory)
export default withFactories

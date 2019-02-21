import React, { Component } from 'react'

import ActiveFactoryContainer from 'Containers/activeFactory'
import FactoriesContainer from 'Containers/factories'

import Input from 'Components/common/Input'
import Button from 'Components/common/Button'
import ConditionalRender from 'Components/common/ConditionalRender'

class FactoryMenu extends Component {
  constructor (props) {
    super(props)

    this.renderNumberOfChildren = this.renderNumberOfChildren.bind(this)
    this.createOrUpdateFactory = this.createOrUpdateFactory.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
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

  handleConfirm (e) {
    const {
      getAllFactories,
      setIsVisible,
      socket
    } = this.props

    setIsVisible(false)
    this.createOrUpdateFactory()
      .then(() => socket.emit('factory updated'))
      .then(getAllFactories)
  }

  handleCancel (e) {
    const {
      setIsVisible
    } = this.props

    setIsVisible(false)
    e.preventDefault()
  }

  render () {
    const {
      type,
      activeFactory = {},
      setKey
    } = this.props

    const {
      name,
      bottom,
      top,
      amount
    } = activeFactory

    const isFactory = type === 'factory'
    const menuClass = isFactory ? 'factory-menu' : 'node-menu'
    const stopPropagation = (e) => e.stopPropagation()

    return (
      <div
        className={menuClass}
        onClick={stopPropagation}
      >
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
        <ConditionalRender
          condition={isFactory}
        >
          <Input
            label='number of children'
            type='text'
            name='amount'
            value={amount}
            setKey={setKey}
          />
        </ConditionalRender>
        <div className='button-group'>
          <Button
            label='confirm'
            onClick={this.handleConfirm}
          />
          <Button
            label='cancel'
            onClick={this.handleCancel}
          />
        </div>
      </div>
    )
  }
}

const withActiveFactory = ActiveFactoryContainer(FactoryMenu)
const withFactories = FactoriesContainer(withActiveFactory)
export default withFactories

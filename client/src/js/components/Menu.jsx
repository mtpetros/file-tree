import React, { Component } from 'react'

import ActiveFactoryContainer from 'Containers/activeFactory'
import FactoriesContainer from 'Containers/factories'

import Input from 'Components/common/Input'
import Button from 'Components/common/Button'
import ConditionalRender from 'Components/common/ConditionalRender'

class FactoryMenu extends Component {
  constructor (props) {
    super(props)

    this.getMenuPosition = this.getMenuPosition.bind(this)
    this.createOrUpdateFactory = this.createOrUpdateFactory.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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

  getMenuPosition () {
    const {
      position = []
    } = this.props

    const [
      x,
      y
    ] = position

    return {
      left: `${x - 250}px`,
      top: `${y + 25}px`
    }
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

  handleDelete (e) {
    const {
      setIsVisible,
      removeFactory,
      activeFactory: {
        id
      },
      socket,
      getAllFactories
    } = this.props

    removeFactory(id)
      .then(() => setIsVisible(false))
      .then(() => socket.emit('factory updated'))
      .then(getAllFactories)
  }

  handleConfirm (e) {
    const {
      getAllFactories,
      setIsVisible,
      socket
    } = this.props

    this.createOrUpdateFactory()
      .then(() => setIsVisible(false))
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
    const isNode = type === 'node'
    const stopPropagation = (e) => e.stopPropagation()
    const positionStyle = this.getMenuPosition()

    return (
      <div
        className='menu'
        style={positionStyle}
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
          <ConditionalRender
            condition={isNode}
          >
            <Button
              label='delete factory'
              onClick={this.handleDelete}
            />
          </ConditionalRender>
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

import React, { Component } from 'react'

import Factory from 'Components/Factory'
import FactoriesContainer from 'Containers/factories'

const renderFactories = (socket) => {
  return (factory) => {
    return (
      <Factory
        factory={factory}
        socket={socket}
        key={factory.id}
      />
    )
  }
}

class Factories extends Component {
  componentWillMount () {
    const {
      socket,
      getAllFactories
    } = this.props

    socket.on('factory updated', () => {
      getAllFactories()
    })
  }

  componentDidMount () {
    const {
      factories = [],
      getAllFactories
    } = this.props

    if (!factories.length) {
      getAllFactories()
    }
  }

  render () {
    const {
      factories = [],
      socket
    } = this.props

    return (
      <div className='branches'>
        <div className='list'>
          {factories.map(renderFactories(socket))}
        </div>
      </div>
    )
  }
}

const withFactories = FactoriesContainer(Factories)
export default withFactories

import React, { Component } from 'react'

import Factory from 'Components/Factory'
import Socket from 'Components/common/Socket'
import FactoriesContainer from 'Containers/factories'

const renderFactories = (factory) => {
  return (
    <Factory
      factory={factory}
      key={factory.id}
    />
  )
}

class Factories extends Component {
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
      getAllFactories
    } = this.props

    return (
      <Socket
        event='factory updated'
        callback={getAllFactories}
      >
        <div className='branches'>
          <div className='list'>
            {factories.map(renderFactories)}
          </div>
        </div>
      </Socket>
    )
  }
}

const withFactories = FactoriesContainer(Factories)
export default withFactories

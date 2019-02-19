import React, { useEffect } from 'react'

import ActiveFactory from 'Components/ActiveFactory'
import FactoriesContainer from 'Containers/factories'

const renderFactories = (factory) => {
  return (
    <ActiveFactory
      factory={factory}
      key={factory.id}
    />
  )
}

const Factories = (props) => {
  const {
    factories = [],
    getAllFactories
  } = props

  console.log(props)

  useEffect(() => {
    if (!factories.length) {
      getAllFactories()
    }
  })

  return (
    <div className='branches'>
      <div className='list'>
        {factories.map(renderFactories)}
      </div>
    </div>
  )
}

const withFactories = FactoriesContainer(Factories)
export default withFactories

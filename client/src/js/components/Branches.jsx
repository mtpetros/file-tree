import React from 'react'

import Factory from 'Components/Factory'

const factories = [
  {
    name: 'factory 1',
    id: 1,
    bottom: 4,
    top: 200,
    amount: 3,
    children: [
      {
        id: 1,
        number: 5
      },
      {
        id: 2,
        number: 10
      },
      {
        id: 3,
        number: 30
      }
    ]
  },
  {
    name: 'factory 2',
    id: 2,
    bottom: 4,
    top: 200,
    amount: 3,
    children: [
      {
        id: 4,
        number: 8
      },
      {
        id: 5,
        number: 12
      },
      {
        id: 6,
        number: 45
      }
    ]
  }
]

const renderFactories = (factory) => {
  return (
    <Factory
      factory={factory}
      key={factory.id}
    />
  )
}

const Branches = (props) => {
  // const {
  //   factories
  // } = props

  return (
    <div className='branches'>
      <div className='list'>
        {factories.map(renderFactories)}
      </div>
    </div>
  )
}

export default Branches

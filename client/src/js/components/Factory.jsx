import React from 'react'

import Child from 'Components/Child'

const renderChildren = (child) => {
  return (
    <Child
      child={child}
      key={child.id}
    />
  )
}

const Factory = (props) => {
  const {
    factory: {
      name = 'factory',
      children = [],
      top = 200,
      bottom = 5
    }
  } = props

  const range = `${bottom} : ${top}`

  return (
    <div className='item'>
      <div className='factory'>
        <div className='node'>
          {name}
        </div>
        <div className='range'>
          {range}
        </div>
      </div>
      {children.map(renderChildren)}
    </div>
  )
}

export default Factory

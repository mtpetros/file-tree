import React from 'react'

import NodeRoot from 'Components/NodeRoot'
import Branches from 'Components/Branches'

const Tree = () => {
  return (
    <div className='tree'>
      <NodeRoot />
      <Branches />
    </div>
  )
}

export default Tree

import React from 'react'

import NodeRoot from 'Components/NodeRoot'
import Factories from 'Components/Factories'
import socketContainer from 'Containers/socket'

const Tree = (props) => {
  const {
    factories,
    socket
  } = props

  return (
    <div className='tree'>
      <NodeRoot
        socket={socket}
      />
      <Factories
        factories={factories}
        socket={socket}
      />
    </div>
  )
}

const withSocket = socketContainer(Tree)
export default withSocket

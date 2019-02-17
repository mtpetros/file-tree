import React, { useState } from 'react'

import NodeRoot from 'Components/NodeRoot'
import Factories from 'Components/Factories'
import ModalWrapper from 'Components/common/ModalWrapper'
import FactoryMenu from 'Components/FactoryMenu'

const Tree = (props) => {
  const [
    isVisible,
    setIsVisible
  ] = useState(false)

  const {
    factories
  } = props

  return (
    <div className='tree'>
      <NodeRoot
        handleViewModal={setIsVisible}
      />
      <Factories
        factories={factories}
      />
      <ModalWrapper
        isVisible={isVisible}
      >
        <FactoryMenu
          setIsVisible={setIsVisible}
        />
      </ModalWrapper>
    </div>
  )
}

export default Tree

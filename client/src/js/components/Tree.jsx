import React, { useState } from 'react'

import factoriesContainer from 'Containers/factories'

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
    factories,
    createFactory
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
          createFactory={createFactory}
        />
      </ModalWrapper>
    </div>
  )
}

const withFactories = factoriesContainer(Tree)
export default withFactories

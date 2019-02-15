import React, { useState } from 'react'

import NodeRoot from 'Components/NodeRoot'
import Branches from 'Components/Branches'
import ModalWrapper from 'Components/common/ModalWrapper'
import FactoryMenu from 'Components/FactoryMenu'

const Tree = () => {
  const [
    isVisible,
    setIsVisible
  ] = useState(false)

  return (
    <div className='tree'>
      <NodeRoot
        handleViewModal={setIsVisible}
      />
      <Branches />
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

import { connect } from 'react-redux'

import {
  setFactory,
  setKey,
  createFactory,
  createChildren
} from 'Reducers/activeFactory'

const mapStateToProps = state => {
  const {
    activeFactory = {}
  } = state

  return {
    activeFactory
  }
}

const mapDispatchToProps = {
  setFactory,
  setKey,
  createFactory,
  createChildren
}

export default connect(mapStateToProps, mapDispatchToProps)

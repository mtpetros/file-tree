import { connect } from 'react-redux'

import {
  setFactory,
  resetFactory,
  setKey,
  createFactory,
  updateFactory,
  removeFactory
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
  resetFactory,
  setKey,
  createFactory,
  updateFactory,
  removeFactory
}

export default connect(mapStateToProps, mapDispatchToProps)

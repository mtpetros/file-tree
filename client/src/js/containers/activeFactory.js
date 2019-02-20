import { connect } from 'react-redux'

import {
  setFactory,
  resetFactory,
  setKey,
  createFactory,
  updateFactory
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
  updateFactory
}

export default connect(mapStateToProps, mapDispatchToProps)

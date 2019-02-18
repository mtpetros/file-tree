import { connect } from 'react-redux'

import {
  setFactory,
  setKey,
  createFactory,
  createChildren
} from 'Reducers/factory'

const mapStateToProps = state => {
  const {
    factory = {}
  } = state

  return {
    factory
  }
}

const mapDispatchToProps = {
  setFactory,
  setKey,
  createFactory,
  createChildren
}

export default connect(mapStateToProps, mapDispatchToProps)

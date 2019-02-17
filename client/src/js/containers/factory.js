import { connect } from 'react-redux'

import {
  setFactory,
  setKey,
  createFactory
} from 'Reducers/factory'

const mapStateToProps = state => {
  return { factory: state.factory }
}

const mapDispatchToProps = {
  setFactory,
  setKey,
  createFactory
}

export default connect(mapStateToProps, mapDispatchToProps)

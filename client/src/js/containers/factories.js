import { connect } from 'react-redux'

import {
  getAllFactories
} from 'Reducers/factories'

const mapStateToProps = state => {
  const {
    factories: {
      data = []
    }
  } = state

  return {
    factories: data
  }
}

const mapDispatchToProps = {
  getAllFactories
}

export default connect(mapStateToProps, mapDispatchToProps)

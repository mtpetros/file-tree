import { connect } from 'react-redux'
import {
  createFactory
} from 'Reducers/factories'

const mapStateToProps = (state) => {
  const {
    factories
  } = state

  return {
    factories
  }
}

const mapDispatchToProps = {
  createFactory
}

export default connect(mapStateToProps, mapDispatchToProps)

const ConditionalRender = (props) => {
  const {
    children,
    condition
  } = props

  if (condition) {
    return children
  }

  return null
}

export default ConditionalRender

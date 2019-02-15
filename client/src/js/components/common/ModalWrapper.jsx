const ModalWrapper = (props) => {
  const {
    children,
    isVisible = false
  } = props

  if (isVisible) {
    return children
  }

  return null
}

export default ModalWrapper

import io from 'socket.io-client'
const socket = io()

const Socket = (props) => {
  const {
    children,
    event,
    callback
  } = props

  socket.on(event, () => {
    console.log('factory updated!')
    callback()
  })

  return children
}

export default Socket

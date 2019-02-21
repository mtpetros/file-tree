import io from 'socket.io-client'

import host from 'Config/hosts'

const socket = io(host.server)

const socketContainer = (Component) => {
  return (props) => Component({
    socket,
    ...props
  })
}

export default socketContainer

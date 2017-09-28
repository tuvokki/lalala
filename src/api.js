import feathers from 'feathers'
import auth from 'feathers-authentication-client'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio'
import io from 'socket.io-client'

const socket = io('http://192.168.0.2:3030', { transports: ['websocket'] })

const api = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))

api.service('/users')
api.service('/games')

export default api

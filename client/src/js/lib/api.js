import host from 'Src/config/hosts'

import methods from './methods'

const {
  get,
  patch,
  post
} = methods

const urlBase = `${host.server}/api`

export const factories = {
  create: (data) => {
    return post(`${urlBase}/factories`, data)
  },
  getAll: () => {
    return get(`${urlBase}/factories`)
  }
}

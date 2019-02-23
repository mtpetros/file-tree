import host from 'Src/config/hosts'

import methods from './methods'

const {
  get,
  put,
  post
} = methods

const urlBase = `${host.server}/api`

export const factories = {
  create: (data) => {
    return post(`${urlBase}/factories`, data)
  },
  update: (id, data) => {
    return put(`${urlBase}/factories/${id}`, data)
  },
  getAll: () => {
    return get(`${urlBase}/factories`)
  },
  remove: (id) => {
    return methods.delete(`${urlBase}/factories/${id}`)
  }
}

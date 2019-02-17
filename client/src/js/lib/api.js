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
    console.log('data', data)
    return post(`${urlBase}/factories`, data)
  }
}

import host from 'Src/config/hosts'

import {
  get,
  patch,
  post
} from './methods'

const urlBase = `${host.server}/api`

export const factories = {
  create: (data) => {
    return post(`${urlBase}/factories`, data)
  }
}

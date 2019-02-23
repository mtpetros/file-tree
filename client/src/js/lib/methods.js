/* globals fetch */

const mode = 'cors'
const redirect = 'error'
const credentials = 'include'
const headers = { 'Content-Type': 'application/json' }

const methodsWithBody = ['POST', 'PATCH', 'PUT']

const getOpts = (opts, method, body) => {
  if (methodsWithBody.includes(method)) {
    const stringified = body = JSON.stringify(body)

    return {
      ...opts,
      body: stringified
    }
  }

  return opts
}

async function request (method, url, body = {}) {
  const baseOpts = {
    mode,
    redirect,
    credentials,
    method,
    headers
  }

  const opts = getOpts(baseOpts, method, body)

  const res = await fetch(url, opts)

  if (method === 'DELETE') {
    return { ok: res.ok, status: res.status }
  }

  const json = await res.json()
  return { ok: res.ok, status: res.status, json }
}

const reduceMethods = (acc, method) => {
  return {
    ...acc,
    [method]: (...args) => {
      return request(method.toUpperCase(), ...args)
        .catch(console.error)
    }
  }
}

const methods = ['get', 'patch', 'post', 'put', 'delete'].reduce(reduceMethods, {})

export default methods

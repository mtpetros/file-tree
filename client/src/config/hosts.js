const hosts = {
  development: {
    client: 'http://0.0.0.0:7324',
    server: 'http://0.0.0.0:8080'
  }
}

const env = {
  [hosts.development.client]: 'development'
}[window.location.origin]

const host = hosts[env]

export default host

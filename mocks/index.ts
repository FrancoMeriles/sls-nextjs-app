/* eslint-disable @typescript-eslint/no-var-requires */
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  if (typeof window === 'undefined') {
    const { server } = require('./server')
    server.listen()
  } else {
    const { worker } = require('./browser')
    worker.start()
  }
}

export {}

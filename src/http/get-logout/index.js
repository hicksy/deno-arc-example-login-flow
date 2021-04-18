import arcHttpAsync from 'https://raw.githubusercontent.com/hicksy/functions/architect-functions-deno/src/http/async/index.js'

async function route(request) {
  return {
    session: {},
    location: '/'
  }
}

export const handler = arcHttpAsync(route)
import arc from 'https://raw.githubusercontent.com/hicksy/functions/architect-functions-deno/src/index.js'

async function route(request) {
  return {
    session: {},
    location: '/'
  }
}

export const handler = arc.http.async(route)
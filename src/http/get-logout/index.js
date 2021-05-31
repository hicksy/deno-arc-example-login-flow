import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js'

async function route(request) {
  return {
    session: {},
    location: '/'
  }
}

export const handler = arc.http.async(route)
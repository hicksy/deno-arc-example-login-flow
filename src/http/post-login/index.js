import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js'

async function route(req) {
  console.log(JSON.stringify(req, null, 2));
  let isLoggedIn = req.body.email === 'admin@example.com' && req.body.password === 'admin'
  return {
    session: { isLoggedIn },
    location: isLoggedIn ? '/protected' : '/'
  }
}

export const handler = arc.http.async(route)
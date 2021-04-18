import arcHttpAsync from 'https://raw.githubusercontent.com/hicksy/functions/architect-functions-deno/src/http/async/index.js'

async function route(req) {
  console.log(JSON.stringify(req, null, 2));
  let isLoggedIn = req.body.email === 'admin@example.com' && req.body.password === 'admin'
  return {
    session: { isLoggedIn },
    location: isLoggedIn ? '/protected' : '/'
  }
}

export const handler = arcHttpAsync(route)
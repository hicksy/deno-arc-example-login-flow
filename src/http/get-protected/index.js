import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js'

async function requireLogin(req) {
  console.log('state:', req.session)
  if (req.session.isLoggedIn === false || typeof req.session.isLoggedIn === 'undefined') {
    console.log(`Attempt to access protected page without logging in!`)
    // Return a response, so middleware processing ends
    return {
      location: `/`
    }
  }
  console.log(`We're logged in`)
  // return nothing, so middleware processing continues
}

async function showProtectedPage(request) {
  console.log(`Showing dashboard`)

  let html = `
	<body>
		<h1>Dashboard</h1>
		<p>Only logged in users can visit this page!</p>
		<p><a href=/logout>logout</a></p>
	</body>`

  return { html }
}

export const handler = arc.http.async(requireLogin, showProtectedPage)

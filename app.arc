@app
loginflow

@aws
runtime deno
timeout 30

@http
get /
get /logout
get /protected
post /login

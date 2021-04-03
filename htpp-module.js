const http = require('http');

const server = http.createServer((req, res)=> {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else
  if (req.url === '/about') {
    res.end('HERE IS THE AOBUT PAGE')
  } else {
    res.end(`<h1>Page not found</h1>
<p>The page you are looking for does not exist.</p>
<a href="/">Back Home</a>`)
  }
})

server.listen(5000)

/* lsof -i tcp:5000
kill -9 86842 */
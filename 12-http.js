const http = require('http')

const server = http.createServer((req,res)=> {
  if(req.url === '/') {
    res.end('Welcome to our page')
    return
  }
  else if(req.url === '/about') {
    res.end('Here is our short history')
    return
  }
  else res.end(`
    <h1>Ooops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>  
  `)
  // setup return
  // if / else if / else 
})

server.listen(5000)

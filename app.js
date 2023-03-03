const http = require('http')

const server = http.createServer((req,res)=> {
  if(req.url === '/'){
    res.end('Welcome to our page')
  }
  if(req.url === '/about'){
    res.end('Here is our short history')
  }
  res.end(`
  <h1>Ooops!</h1>
  `)
})

server.listen(5000)

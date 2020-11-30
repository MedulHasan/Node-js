const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end('<h1>Hello node js<h1>')
})

server.listen(4141, () => {
    console.log('server is running in 4141');
})
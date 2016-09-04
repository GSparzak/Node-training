var http = require('http');

var PORT = 8080;

var server = http.createServer(function(request, response) {
    response.end("My first HTTP server written in Node.js")
});

server.listen(PORT, function () {
    console.log("Server listening on http://localhost:%s", PORT)
});

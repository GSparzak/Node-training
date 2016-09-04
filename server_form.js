// add necessary modules
var http = require('http');
var qs = require('querystring');

var pageHTML = '<html>' +
    '<head>' +
    '<title>Serwer z formularzem</title>' +
    '<meta charset="utf-8">' +
    '</head>' +
    '<body>' +
    '<form method="post" action="">' +
    '<div>' +
    '<label for="nickname">Nickname:</label>' +
    '<input type="text" name="nickname">' +
    '</div>' +
    '<div>' +
    '<input type="submit" value="send it">' +
    '</div>' +
    '</form>' +
    '</body>' +
    '</html>';

var PORT = 1337;

var server = createServer(function(req, res) {
    var requestData = '';

    if (req.method === "GET") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(pageHTML);
    } else if (req.method === "POST") {
        req.setEncoding('utf-8');

        req.on('data', function(data) {
            requestData += data;
        });

        req.on('end', function() {
            var postData = qs.parse(requestData);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>Your nick: '+ postData.nickname + '</h1>');
        });
    }
});

server.listen(PORT, function () {
    console.log("Server listening on http://localhost:%s", PORT)
});

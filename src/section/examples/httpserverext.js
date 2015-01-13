var http = require("http");
var fs = require("fs");

var httpServer = http.createServer(
    function (req, res) {
        fs.readFile(req.url, function(err, data) {
            res.writeHead(err ? 404 : 200, {"Content-Type": "text/plain"});
            res.end(err ? "Not found.\n" : data);
        });
    }
);
httpServer.listen(1337, "127.0.0.1");

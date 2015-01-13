var http = require("http");
var fs = require("fs");

var httpServer = http.createServer(
    function (req, res) {
        var stream = fs.createReadStream(req.url);

        stream.on("open", function() {
            res.writeHead(200, {"Content-Type": "text/plain"});
            stream.pipe(res);
        });

        stream.on("error", function(err) {
            res.writeHead(400, {"Content-Type": "text/plain"});
            res.end(err);
        });
    }
);
httpServer.listen(1337, "127.0.0.1");

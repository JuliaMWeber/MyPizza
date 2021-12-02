
/*
const https = require("https");
const fs = require("fs").promises;
const host = "localhost";
const port = 8000;

const requestListener = function (req,res){  //listOrders
    fs.readFile(__dirname + "/index.html").then (contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
  
};

const server = https.createServer(requestListener);
server.listen(port, host, () => {
    console.log("Server is running on htpps://${host}:${port}");
});
*/
//TOdo
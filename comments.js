// Create web server
// Create a web server that listens for requests on port 3000 and returns the comments.html file.
// The comments.html file should be created in the same directory as the comments.js file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('./comments.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000);
console.log('Server listening on port 3000');
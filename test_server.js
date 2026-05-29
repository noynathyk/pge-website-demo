import http from 'http';
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

const port = 3006;
const host = '127.0.0.1';

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
  process.exit(0);
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

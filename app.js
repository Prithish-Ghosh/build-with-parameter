require('http')
  .createServer((_req, res) => res.end('poc ok\n'))
  .listen(3000);

require('http')
  .createServer((_req, res) => res.end('poc ok - scan test v2\n'))
  .listen(3000);

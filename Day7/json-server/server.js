const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('users.json');
const middlewares = jsonServer.defaults();

const port = 8081; // You can choose any available port

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

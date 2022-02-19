import { Server, createServer } from 'http';
import next, { NextApiHandler, NextApiRequest } from 'next';
import { Server as socketioServer, Socket } from 'socket.io';
import { socketChargeUpdate, socketTaskUpdate } from './socketConnect';
import express, { Express } from 'express';

const port = parseInt(process.env.PORT || '3000', 10);
console.log(port);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle: NextApiHandler = app.getRequestHandler();

app.prepare().then(async () => {
  const expressApp: Express = express();
  const server: Server = createServer(expressApp);
  const io: socketioServer = new socketioServer();

  io.on('connection', (socket: Socket) => {
    console.log('connect');
    socketChargeUpdate(socket);
    socketTaskUpdate(socket);
  });

  io.attach(server);

  expressApp.all('*', (req: NextApiRequest, res: any) => handle(req, res));
  server.listen(port);
});

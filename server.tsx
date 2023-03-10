import http from 'http';
import app from './app';

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
  console.log('server is perfect up');
});

import express from 'express';
import mainRoutes from './routes/index';
import dashboardRoutes from './routes/dashboard';

const server = express();

server.use('/', mainRoutes);
server.use('/dashboard', dashboardRoutes);

server.listen(80);

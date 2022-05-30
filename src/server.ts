import express, {Request, Response} from 'express';
import path from 'path';
import mainRoutes from './routes/index';
import dashboardRoutes from './routes/dashboard';

const server = express();
console.log(path.join(__dirname, '../public'));

server.use(express.static(path.join(__dirname, '../public')));

server.use('/', mainRoutes);
server.use('/dashboard', dashboardRoutes);
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
})

server.listen(80);

import express, {Request, Response} from 'express';
import mainRoutes from './routes/index';
import dashboardRoutes from './routes/dashboard';

const server = express();

server.use('/', mainRoutes);
server.use('/dashboard', dashboardRoutes);
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
})

server.listen(80);

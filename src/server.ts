import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv'; 
import mainRoutes from './routes/index';
import dashboardRoutes from './routes/dashboard';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true})); //habilita o express para receber dados via post

server.use('/', mainRoutes);
server.use('/dashboard', dashboardRoutes);
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
})

server.listen(process.env.PORT);

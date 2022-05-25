import express, {Request, Response} from 'express';

const server = express();

server.get('/', (req: Request, res: Response ) => {
    res.send('Hello World!');
})
server.get('/teste', (req: Request, res: Response ) => {
    res.send('Teste de rotas!');
})
server.get('/*', (req: Request, res: Response ) => {
    res.send('404: not found');
})
server.listen(80);

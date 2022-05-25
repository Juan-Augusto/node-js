import express, {Request, Response} from 'express';

const server = express();

server.get('/', (req: Request, res: Response ) => {
    res.send('Hello World!');
})
server.get('/noticia/:slug', (req: Request, res: Response ) => {
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
})
server.get('/voo/:origem-:destino', (req: Request, res: Response ) => {
    let {origem, destino }= req.params;
    res.send(`Procurando voos de ${origem.toUpperCase()} para ${destino.toUpperCase()}`);
})
server.get('/*', (req: Request, res: Response ) => {
    res.send('404: not found');
})
server.listen(80);

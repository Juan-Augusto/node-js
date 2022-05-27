import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

router.get("/contato", (req: Request, res: Response) => {
    res.send('Formulário de contato');
});
router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página sobre');
});
router.get('/*', (req: Request, res: Response) => {
    res.send('Página não encontrada');
})

export default router;
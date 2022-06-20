import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    let user  = {
        name: 'Juan Augusto',
        age: '22',
        email: 'juanaugusto1@main.com',
        profile_pic: 'https://yt3.ggpht.com/yti/APfAmoFpCw3aOM6yumulCWvbKnuuC3quHD-qZei2NcSyjw=s88-c-k-c0x00ffffff-no-rj-mo'
    };
    res.render('home', {
        user
    });
});

router.get("/contato", (req: Request, res: Response) => {
    res.send('Formulário de contato');
});
router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página sobre');
});


export default router;
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    let userAge : number = 22;
    let showAge : boolean = false;

    if(userAge >= 18){
        showAge = true;
    }

    let user  = {
        name: 'Juan Augusto',
        email: 'juanaugusto1@main.com',
        age: 22,
        profile_pic: 'https://yt3.ggpht.com/yti/APfAmoFpCw3aOM6yumulCWvbKnuuC3quHD-qZei2NcSyjw=s88-c-k-c0x00ffffff-no-rj-mo',
    };
    res.render('home', {
        user,
        showAge
    });
});

router.get("/contato", (req: Request, res: Response) => {
    res.send('Formulário de contato');
});
router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página sobre');
});


export default router;
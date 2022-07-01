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
        age: userAge,
        profile_pic: 'https://yt3.ggpht.com/yti/APfAmoFpCw3aOM6yumulCWvbKnuuC3quHD-qZei2NcSyjw=s88-c-k-c0x00ffffff-no-rj-mo',
    };
    res.render('pages/home', {
        user,
        showAge,
        simpleList: [
            'Item 1',
            'Item 2',
            'Item 3',
        ] ,
        products: [
            {
                title: 'Product 1',
                price: 10,
            },
            {
                title: 'Product 2',
                price: 20,
            },
            {
                title: 'Product 3',
                price: 30,
            }
        ]
    });
});

router.get("/contato", (req: Request, res: Response) => {
    res.render('pages/contact');
});
router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/about');
});

router.get('/nome', (req: Request, res: Response) => {
    let mainName:string = req.query.nome as string;
    let mainAge:string = req.query.idade as string;
    res.render('pages/nome', {
        mainName,
        mainAge
    });
});
router.get('/idade', (req: Request, res: Response) => {
    res.render('pages/age')
    }
);

router.post('/idade-resultado', (req: Request, res: Response) => {
    let showAge : boolean = false;
    let age = 0;

    if (req.body.year) { //necessário para que o express entenda que o body é um json e o servidor precisa da utilização do urlencoded para aceitar o formulário
        let year: number = parseInt(req.body.year as string);
        let currentYear: number = new Date().getFullYear();
        age = currentYear - year;
        showAge = true;
    }
    res.render('pages/age',{
        age,
        showAge
    })
})
export default router;
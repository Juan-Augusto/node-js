import { Request, Response } from "express";

export const name = (req: Request, res: Response) => {
    let mainName:string = req.query.nome as string;
    let mainAge:string = req.query.idade as string;
    res.render('pages/nome', {
        mainName,
        mainAge
    });
}

export const age = (req: Request, res: Response) => {
    res.render('pages/age')    
}

export const ageForm = (req: Request, res: Response) => {
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
} 
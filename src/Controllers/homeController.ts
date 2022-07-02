import { Request, Response } from "express";
import { Product } from "../Models/Product";

export const home = (req: Request, res: Response) => {
    let list = Product.getAll();
    let expensiveList = Product.getPriceFromMax(15);

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
        products: list,
        expensive: expensiveList
    });
};
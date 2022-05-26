import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Dashboard panel - Home");
});

router.get("/about-dashboard", (req: Request, res: Response) => {
    res.send('Dashboard panel - About');
});

export default router;
import { Router } from "express";

import { home } from "../Controllers/homeController";
import { about, contact } from "../Controllers/infoController";
import { name, age, ageForm } from "../Controllers/userController";

const router = Router();

router.get("/", home);

router.get("/contato", contact);

router.get('/sobre', about);

router.get('/nome', name);

router.get('/idade', age)

router.post('/idade-resultado', ageForm)

export default router;
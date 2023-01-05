import express from "express";

import { getAstronauts, createAstronaut } from "../contollers/astronaut.js";

const router = express.Router();

router.get('/', getAstronauts);
router.post('/', createAstronaut);

export default router;
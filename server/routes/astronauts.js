import express from "express";

import { getAstronauts, createAstronaut, updateAstronaut } from "../contollers/astronaut.js";

const router = express.Router();

router.get('/', getAstronauts);
router.post('/', createAstronaut);
router.patch('/:id', updateAstronaut);

export default router;
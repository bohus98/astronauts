import express from "express";

import { getAstronauts, createAstronaut, updateAstronaut, deleteAstronaut } from "../contollers/astronaut.js";

const router = express.Router();

router.get('/', getAstronauts);
router.post('/', createAstronaut);
router.patch('/:id', updateAstronaut);
router.delete('/:id', deleteAstronaut)

export default router;
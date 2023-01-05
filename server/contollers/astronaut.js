import AstronautMess from "../models/astronautMess.js";

export const getAstronauts = async (req,res) => {
    try {
        const astronautMessages = await AstronautMess.find();
        

        res.status(200).json(astronautMessages);
    } 
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const createAstronaut = async (req,res) => {
    const astronaut = req.body;

    const newAstronaut = new AstronautMess(astronaut);

    try {
        await newAstronaut.save();
        res.status(201).json(newAstronaut);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}
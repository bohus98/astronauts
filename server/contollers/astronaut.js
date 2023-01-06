import mongoose from "mongoose";
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

export const updateAstronaut = async (req,res) => {
    const {id: _id} = req.params;
    const astroaut = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No astroaut with that id');
    
    const updatedAstronaut = await AstronautMess.findByIdAndUpdate(_id, {...astroaut, _id}, {new:true});

    res.json(updateAstronaut);
}
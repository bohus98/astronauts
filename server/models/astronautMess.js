import mongoose from "mongoose";

const astronautSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    superPowers: [String],
    selectedFile: String,
    about: String,
    birthDate: String
});

const AstronautMess = mongoose.model('AstronautMess', astronautSchema);

export default AstronautMess;
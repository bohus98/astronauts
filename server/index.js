import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import astronautsRoutes from './routes/astronauts.js';


const app = express();
dotenv.config();

app.get('/',(req,res) => {
    res.send('Hello to Astronauts API')
});

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/astronauts', astronautsRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.error(err.stack));



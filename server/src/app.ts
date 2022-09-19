import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router  from './routes/posts';

dotenv.config({path : './src/config/.env'})

const app = express();

app.use(bodyParser.json({ limit : "30mb"}));
app.use(bodyParser.urlencoded({limit : '30mb'}));
app.use(cors());

const CONEECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT

mongoose.connect(CONEECTION_URL)
.then(() => {
    console.log('DB connection is success');
    app.use(router);
    app.listen(PORT, ()=> {
        console.log(`Server is listening at ${PORT}`)
    })
})
.catch((error) => {
    console.log(error.message);
})





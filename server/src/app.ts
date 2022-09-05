import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router  from './routes/posts';
import logger from './middlewares/loggerMiddleware';

const app = express();

app.use(bodyParser.json({ limit : "30mb"}));
app.use(bodyParser.urlencoded({limit : '30mb'}));
app.use(cors());

const CONEECTION_URL = 'mongodb+srv://mongo:Testing@cluster0.clgum.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.port || 5000

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





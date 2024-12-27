import { config } from 'dotenv';
import app from './server/server.js';
import mongoose from 'mongoose';
import cors from 'cors';

config();


const corsOptions = {
   origin: "http://localhost:3000", // Replace with your frontend URL
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
   allowedHeaders: "Content-Type,Authorization", // Allowed headers
 };
 
app.use(cors(corsOptions));
 


const port = process.env.PORT;
const startApp = ()=>{
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
        console.log(`Url: localhost:${port}`);
    });
};

console.log("Trying to connect to mongoose....");
mongoose.connect(process.env.MONGOOSE_URL)
.then( () => {
    console.log("Connected to mongoose.");
    console.log(process.env.MONGOOSE_URL);
    console.log("Starting express app....");
    startApp();
})
.catch( (err) => {
    console.log("MONGOOSE Error: ", err);
});
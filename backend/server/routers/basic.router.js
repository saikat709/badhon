import { Router } from 'express';

const basicRouter = Router();

import User from '../models/User.model.js'; 
import hash from 'bcrypt';


basicRouter.get('/', (request, response, next )=>{
    // const data = User.find.all();
    return response.send("Saikat -- home" );
});


export default basicRouter;

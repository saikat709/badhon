import { Router } from 'express';
const router = Router();
import User from '../models/User.schema.js'; 
import { hash } from 'bcrypt';


router.get('/user/:id', (request, response, next )=>{
    // const data = User.find.all();
    return response.send("Saikat" + request.params.id );
});

router.post('/user', (request, response, next) => {

    const user = new User({
        firstName : request.body.firstName,
        lastName  : request.body.lastName,
        userName  : request.body.userName,
        password  : request.body.password,
        email     : request.body.email
    });

    hash(user.password, 10, function (err, hashed_pass){
        if (err) { 
            return next(err);
        }
        user.password = hashed_pass;
        user.save().then( data => {
            console.log('Successfully created a new User');
            response.send( { data:"created succesfully" } ).status(200);
        }).catch( error => {
            response.send({
                data : error
            }).status(400);
        })
    })

})

export default router;
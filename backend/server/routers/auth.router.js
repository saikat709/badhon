import { Router } from 'express';
const router = Router();
import User from '../models/User.model.js'; 
import hash from 'bcrypt';
import jwt from 'jsonwebtoken';

router.get('/login', (request, response, next )=>{
    response.status(200).json({user: {}, token: 'token'});
});

router.post('/authenticate', async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();

      } catch (error) {
        res.status(401).json({ message: "Not authorized, token failed" });
      }
    }
  
    if (!token) {
      res.status(401).json({ message: "Not authorized, no token" });
    }
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

router.get('/logout', (request, response, next )=>{
    // const data = User.find.all();
    return response.send("Saikat" + request.params.id );
});

export default router;
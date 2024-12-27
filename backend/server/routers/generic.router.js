import { Router } from "express";
import User from "../models/User.model.js";
import Profile from "../models/Porfile.model.js";
import genericRouterController from "../generic/genericRouterController.js";

// const genericsRouter = Router();

// generic routes
const userRoutes = genericRouterController(User);
const profileRoutes = genericRouterController(Profile);

// assigning routes as middleware 
// it is okay as we dont call next() in those

// genericsRouter.use('/user', userRoutes);
// genericsRouter.use('/profile', profileRoutes);


// nb.  router.route('path', {}).get(()=>{}).post(()=>{})
// export default genericsRouter;

export default { userRoutes, profileRoutes }
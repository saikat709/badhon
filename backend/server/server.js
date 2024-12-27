import express from 'express';
import parser from 'body-parser';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import basicAdmin from './admin/BasicAdminRouter.js';
import authRouter from './routers/auth.router.js';
import basicRouter from './routers/basic.router.js';
import genericRoutes from './routers/generic.router.js';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(helmet());
app.use(limiter)

// static
app.use( express.static( 'server/static') );

// admin 
app.use( basicAdmin.basicAdminJs.options.rootPath, basicAdmin.basicAdminRouter );

// app
app.use( parser.urlencoded({ extended: true }));
app.use( parser.json() );

// route
app.use( '', basicRouter);
app.use( '/auth', authRouter);

// generic routes
app.use( '/user', genericRoutes.userRoutes);
app.use( '/profile', genericRoutes.profileRoutes);

export default app;
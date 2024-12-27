import express from 'express';
import parser from 'body-parser';

import userRouter from './routers/auth.router.js';
const app = express();

// app
app.use( parser.urlencoded({ extended: true }));
app.use( parser.json() );

app.use('/auth', userRouter);

export default app;
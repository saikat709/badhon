import app from './server/server.js';
import mongoose from 'mongoose';

const MONGOOSE_URL = "mongodb://127.0.0.1:30017/test"

app.listen(3000, () => {
   console.log('Server listening on 3000');
})

mongoose.connect( MONGOOSE_URL).catch( err=> {
   console.log('Connected to Mongoose.');
})
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3001;

import DBConnect from './dbConnect.js';
import router from './v1/routes/index.js';

//Initializing Routes
router(app);

// listen:
app.listen(port, async () => {
    new DBConnect(); // Please do not remove this line
    console.log(`App is listening on port ${port}...`);
})
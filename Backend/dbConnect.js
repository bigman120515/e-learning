import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// mongo connection:
// const db_link = "mongodb+srv://admin:admin@cluster0.nxzfj1w.mongodb.net/?retryWrites=true&w=majority";
const db_link = process.env.DB_CONNECTION_URL;
class DBConnect {

    constructor() {
        this.dbConnection();
    }

    async dbConnection(){
            try {
            await mongoose.connect(db_link)
            console.log("Connect to MongoDB");
        } catch (err) {
            console.log("DB error", err);
        }

        mongoose.connection.on('disconnected', () => {
            console.log("MongoDB disconnected");
        });
    }
}

export default DBConnect;
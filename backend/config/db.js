import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error('MONGODB_URI not found in environment variables');
        }
        await mongoose.connect('mongodb://rahulbirdi75_db_user:invoice123@cluster0.cty8oem.mongodb.net/invoice');
        console.log('DB CONNECTED');
    } catch (error) {
        console.error('DB CONNECTION ERROR:', error.message);
        console.log('Server continuing without database connection...');
    }
}

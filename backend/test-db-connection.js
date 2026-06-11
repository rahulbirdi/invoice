import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const testConnection = async () => {
    console.log('Testing MongoDB connection...');
    console.log('Connection String:', process.env.MONGODB_URI?.replace(/:[^:]+@/, ':****@'));
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log('✓ MongoDB connection successful!');
        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('✗ MongoDB connection failed:');
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        process.exit(1);
    }
};

testConnection();

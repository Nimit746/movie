import mongoose from 'mongoose';


const connectdb = async () => {
    try {
        console.log('\nConnecting to The database...');
        await mongoose.connect(process.env.MONGO_CONN);
        console.log('Database connected successfully');
    } catch (err) {
        console.log(`Error connecting to the database: ${err.message}`);
    }
}

export default connectdb;
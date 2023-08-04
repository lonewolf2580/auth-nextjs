import mongoose from 'mongoose';

const env = process.env;
export async function connect() {
    try {
        mongoose.connect(env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log("Connected Successfully");
            
        })
    } catch (error) {
        console.log(error);
        
    }
}
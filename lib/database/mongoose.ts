import mongoose, {Mongoose} from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectToDb = async () => {
    console.log('trying to establish connection to db')
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('MONGO DB url is mising');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, { 
        dbName: 'imagealchemy', bufferCommands: false 
      })

    cached.conn = await cached.promise;
    console.log('conn value', cached.conn);
    return cached.conn;
}
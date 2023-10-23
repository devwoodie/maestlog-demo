// mongo db connect
import {MongoClient} from "mongodb";

// url type undefined 대비 예외처리
if(!process.env.NEXT_PUBLIC_DB_URI){
    throw new Error('Please check your Mongo URI to .env');
}

const uri: string = process.env.NEXT_PUBLIC_DB_URI;
let connectDB: Promise<MongoClient>;

// 글로벌 변수에 타입을 추가해야 되는 경우, globalThis 타입으로 추가
let globalWithConnect = global as typeof globalThis & {
    _mongo: Promise<MongoClient>
}

if(process.env.NODE_ENV === "development"){
    if(!globalWithConnect._mongo){
        globalWithConnect._mongo = new MongoClient(uri).connect();
    }
    connectDB = globalWithConnect._mongo
}else{
    connectDB = new MongoClient(uri).connect();
}

export { connectDB };


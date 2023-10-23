import {MongoClient} from "mongodb";
import {connectDB} from "@/utils/database";

export default async function Home() {

    // db 입출력
    // const db = (await connectDB).db("maestlog-demo");
    // let result = await db.collection("post").find().toArray();

    return (
        <div>
            Hello
        </div>
    )
}

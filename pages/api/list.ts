import {connectDB} from "@/utils/database";

export default async function handler(req: any, res: any){
    if(req.method === "GET"){
        // db 입출력
        const db = (await connectDB).db("maestlog-demo");
        const result = await db.collection("post").find().toArray();
        return res.status(200).json(result);
    }
}

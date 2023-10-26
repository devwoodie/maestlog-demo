import {connectDB} from "@/utils/database";

export default async function handler(req: any, res: any){
    if(req.method === "POST"){
        if(req.body.title === ""){
            return res.status(500).json("Error");
        }else if(req.body.content === ""){
            return res.status(500).json("Error");
        }
        let now = new Date();
        req.body.date = `${now.getMonth() + 1}월 ${now.getDay()}일 ${now.getHours()}:${now.getMinutes()}`;

        try{
            // db 입출력
            const db = (await connectDB).db("maestlog-demo");
            const result = await db.collection("post").insertOne(req.body);
            return res.status(200).redirect(302, "/list");
        }catch (err){
            console.log(err)
        }
    }
}

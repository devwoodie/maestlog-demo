export default function handler(req: any, res: any){
    if(req.method === "GET"){
        const now = new Date();

        return res.status(200).json(now);
    }
}

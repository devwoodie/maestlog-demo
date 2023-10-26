import {connectDB} from "@/utils/database";
import Link from "next/link";

export default async function List(){

    // db 입출력
    const db = (await connectDB).db("maestlog-demo");
    let result = await db.collection("post").find().sort({"_id" : -1}).toArray();

    return(
        <>
            <div style={{textAlign: "right", marginBottom: "20px"}}>
                <Link className="write-btn" href={`/write`}>글쓰기</Link>
            </div>
            <div className="list-bg">
                {result?.map((item, idx) => (
                    <Link prefetch={false} href={`/detail/${item._id}`} key={idx}>
                        <div className="list-item">
                            <h4>{item.title}</h4>
                            <small>{item.date}</small>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

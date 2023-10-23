import {connectDB} from "@/utils/database";
import Link from "next/link";

export default async function List(){

    // db 입출력
    const db = (await connectDB).db("maestlog-demo");
    let result = await db.collection("post").find().toArray();

    return(
        <div className="list-bg">
            {result?.map((item, idx) => (
                <Link prefetch={false} href={`detail/${item._id}`} key={idx}>
                    <div className="list-item">
                        <h4>{item.title}</h4>
                        <small>1월 1일</small>
                    </div>
                </Link>
            ))}
        </div>
    )
}

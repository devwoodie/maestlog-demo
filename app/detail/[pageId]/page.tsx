import {connectDB} from "@/utils/database";
import {ObjectId} from "mongodb";
import BackBtn from "@/components/BackBtn";

export default async function Detail(props: any){

    let pageId: string = props.params.pageId;

    // db 입출력
    const db = (await connectDB).db("maestlog-demo");
    let result: any = await db.collection("post").findOne({
        _id: new ObjectId(pageId)
    });

    return(
        <>
            <div style={{textAlign: "right"}}>
                <BackBtn title="뒤로" style={{marginBottom: "10px"}} />
            </div>
            <div className="detail-page">
                <h4>{result.title}</h4>
                <p>{result.content}</p>
            </div>
        </>
    )
}

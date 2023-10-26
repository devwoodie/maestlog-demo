import {connectDB} from "@/utils/database";
import {ObjectId} from "mongodb";
import BackBtn from "@/components/BackBtn";
import Button from "@/components/Button";

export default async function Detail(props: any){

    let pageId: string = props.params.pageId;

    // db 입출력
    const db = (await connectDB).db("maestlog-demo");
    let result: any = await db.collection("post").findOne({
        _id: new ObjectId(pageId)
    });

    return(
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                <Button title="수정" style={{marginBottom: "10px"}} link={`/edit/${pageId}`} />
                <Button title="뒤로" style={{marginBottom: "10px", marginLeft: "10px"}} link={`/list`} />
            </div>
            <div className="detail-page">
                <h4>{result.title}</h4>
                <p>{result.content}</p>
            </div>
        </>
    )
}

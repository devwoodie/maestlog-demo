import BackBtn from "@/components/BackBtn";
import {connectDB} from "@/utils/database";
import {ObjectId} from "mongodb";

export default async function Edit(props: any){

    let pageId: string = props.params.pageId;

    // db 입출력
    const db = (await connectDB).db("maestlog-demo");
    let result: any = await db.collection("post").findOne({
        _id: new ObjectId(pageId)
    });

    return(
        <div className="p-20">
            <div style={{textAlign: "right"}}>
                <BackBtn title="뒤로" style={{marginBottom: "10px"}} />
            </div>
            <h4>글 수정</h4>
            <form action="/api/post/edit" method="POST">
                <input name="_id" defaultValue={result._id.toString()} />
                <input name="title" placeholder="글 제목" defaultValue={result.title} />
                <textarea  name="content" placeholder="글 내용" defaultValue={result.content} ></textarea>
                <button className="submit-btn" type="submit">작성</button>
            </form>
        </div>
    )
}

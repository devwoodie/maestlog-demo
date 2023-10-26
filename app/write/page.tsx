import BackBtn from "@/components/BackBtn";
import Button from "@/components/Button";

export default function Write(){
    return(
        <div className="p-20">
            <div style={{textAlign: "right"}}>
                <BackBtn title="뒤로" style={{marginBottom: "10px"}} />
            </div>
            <h4>글 작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글 제목" />
                <textarea  name="content" placeholder="글 내용" ></textarea>
                <button className="submit-btn" type="submit">작성</button>
            </form>
        </div>
    )
}

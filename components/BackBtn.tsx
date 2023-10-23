'use client'

import {useRouter} from "next/navigation";

export default function BackBtn(props: any){

    const router = useRouter();

    return(
        <button
            onClick={() => {router.back();}}
            style={{
                ...props.style,
                background: "#000",
                color: "#fff",
                padding: "5px 8px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px"
            }}
        >{props.title}</button>
    )
}

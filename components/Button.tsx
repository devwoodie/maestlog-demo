import Link from "next/link";

export default function Button(props: any){
    return(
        <Link
            href={props.link}
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
        >{props.title}</Link>
    )
}

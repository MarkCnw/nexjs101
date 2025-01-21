import Link from "next/link"
import Image from "next/image"

export default function Card({src,title}:{src:string,title:string}) {
    return (
        <div>
            <Image src={src} width={500} height={500} alt="images" className="rounded-xl" />
            <div>{title}</div>  
            <div><Link href="#">Click</Link></div>
        </div>
    )
}

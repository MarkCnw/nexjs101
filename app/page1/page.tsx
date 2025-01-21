import Image from "next/image";
import Link from "next/link";
export default function Page() {
    return (
        <div>
            <h1 className="text-3xl text-center">Page1</h1>
            <div className="flex justify-center">
                <Image src="/v.jpeg" width={300} height={300} alt="player" />
            </div>

            
            <div className="text-center">
            <div>STUDENT 661621100130-5</div>
                <Link href="\page1">Go to page1</Link>
                <br />
                <Link href="\page2">Go to page2</Link>
                <br />
                <Link href="\page3">Go to page3</Link>
            </div>

        </div>
    );
}
  
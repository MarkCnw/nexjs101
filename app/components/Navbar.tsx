import Link from "next/link";
const menu = [
    { name: "Home", path: "#" },
    { name: "About us", path: "#" },
    { name: "Page1", path: "/page1" },
    { name: "Page2", path: "/page2" },
    { name: "Page3", path: "page3" },
    { name: "Page4", path: "page4" },
]
export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex space-x-4 justify-center">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}


  


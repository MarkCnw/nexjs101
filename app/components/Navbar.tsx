import Link from "next/link";
import Image from "next/image";

const menu = [
    { name: "About Me", path: "/page1" },
    { name: "List", path: "/player" },
];

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://github.com/MarkCnw/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/rr.png" width={32} height={32} alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Real Madrid</span>
                </a>
                
                {/* Move menu items to the right and add hover effects */}
                <div className="flex items-center ml-auto">
                    <ul className="flex space-x-6">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path} 
                                    className="relative px-4 py-2 text-gray-900 dark:text-white transition-all duration-200 
                                    hover:bg-blue-500 hover:text-white rounded font-bold text-lg
                                    before:content-[''] before:absolute before:top-0 before:left-0 
                                    before:w-full before:h-full before:border-2 before:border-transparent
                                    hover:before:border-blue-600 before:rounded
                                    before:transition-all before:duration-200">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Mobile menu button */}
                <button data-collapse-toggle="navbar-user" type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
                    rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
                    focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-user" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
        </nav>
    );
}
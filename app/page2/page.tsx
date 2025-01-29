import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* การ์ดหลัก */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-4">
        {/* หัวข้อการ์ด */}
        <h1 className="text-3xl text-center font-bold">Page2</h1>

        {/* ส่วนรูปภาพ */}
        <div className="flex justify-center">
          <Image 
            src="/j.jpeg" 
            width={300} 
            height={300} 
            alt="player"
            className="rounded-lg"
          />
        </div>

        {/* ข้อมูลนักศึกษา */}
        <div className="text-center text-gray-600">
          STUDENT 661621100130-5
        </div>

        {/* กลุ่มลิงก์ */}
        <div className="flex flex-col items-center space-y-3">
          <Link 
            href="/page1"
            className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Go to page1
          </Link>
          
          <Link
            href="/page2"
            className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Go to page2
          </Link>
          
          <Link
            href="/page3"
            className="w-full max-w-xs bg-purple-500 hover:bg-purple-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Go to page3
          </Link>
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image';

export default function TechCard() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative rounded-2xl overflow-hidden bg-gray-900">
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="relative w-full md:w-1/3 h-72 md:h-auto">
            <Image
              src="/tech-workspace.jpg"
              alt="Technology workspace"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content section */}
          <div className="w-full md:w-2/3 p-8 md:p-12 bg-gradient-to-r from-gray-900 to-gray-800">
            <h2 className="text-4xl font-bold text-white mb-4">
              Noteworthy technology acquisitions 2021
            </h2>
            <p className="text-lg text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
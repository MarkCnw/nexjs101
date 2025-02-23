import Image from 'next/image';

export default function TechCard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/bernabew.jpg"
              alt="Santiago Bernabéu Stadium"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-r from-gray-900 to-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Santiago Bernabéu Stadium
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Santiago Bernabéu Stadium is the home of Real Madrid, one of the biggest football clubs in the world. 
              Located in Madrid, Spain, it has a capacity of over 80,000 seats. The stadium is named after Santiago Bernabéu, a former player and president of the club.
              <br /><br />
              It is famous for hosting major football events, including Champions League finals and international tournaments. Recently, it was renovated with a modern retractable roof and high-tech features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

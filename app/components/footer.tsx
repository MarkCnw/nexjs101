import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaSnapchat, FaTiktok } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  const sponsors = [
    // Top tier sponsors
    [
      { name: 'Emirates', path: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/emirates_gray.app.svg?$Mobile$' },
      { name: 'Adidas', path: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/adidas_gray.app.svg?$Mobile$' },
      { name: 'HP', path: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/bmw_gray.app.svg?$Mobile$' },
    ],
    // Middle tier sponsors
    [
      { name: 'EA Sports', path: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/ea-sports_gray.app.svg?$Mobile$' },
      { name: 'Adobe', path: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/adobe_gray.app.svg?$Mobile$' },
      { name: 'Cisco', path: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/cisco_gray.app.svg?$Mobile$' },
      { name: 'Canon', path: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/canon_gray.app.svg?$Mobile$' },
    ],
    // Bottom tier sponsors
    [
      { name: 'PlayStation', path: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/playstation_gray.app.svg?$Mobile$' },
      { name: 'Sanitas', path: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/sanitas_gray.app.svg?$Mobile$' },
    ],
  ];

  const footerLinks = [
    '66162110130-5 CHINNAWONG MOONKHONBURI'
  ];

  return (
    <footer className="w-full bg-white text-[#121212] py-8">
      {/* Sponsors Grid */}
      <div className="container mx-auto px-4 mb-12">
        {sponsors.map((tier, index) => (
          <div key={index} className="flex justify-center items-center flex-wrap gap-8 mb-8">
            {tier.map((sponsor) => (
              <div key={sponsor.name} className="w-24 h-12 relative hover:opacity-75 transition-all duration-300">
                <Image
                  src={sponsor.path}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          {/* Left - Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/rr.png"
              alt="Real Madrid"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-sm text-[#666666]">
              Real Madrid © 2025 All rights reserved
            </span>
          </div>

          {/* Middle - Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            {footerLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm text-[#666666] hover:text-[#121212] transition-colors duration-200"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right - Social Media */}
          <div className="flex gap-4">
            {[FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTwitch, FaSnapchat, FaTiktok].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-[#666666] hover:text-[#121212] transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
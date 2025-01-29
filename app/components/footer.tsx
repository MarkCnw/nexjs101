export default function Footer() {
  return (
    <footer className="relative w-full mt-auto bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">LOGO</h2>
          <p className="text-sm text-gray-400">SOLOGAN COMPANY</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm mt-4 md:mt-0">
          <div>
            <p className="font-semibold">Weebly Themes</p>
            <ul className="text-gray-400">
              <li>Pre-sale FAQs</li>
              <li>Submit a Ticket</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Services</p>
            <ul className="text-gray-400">
              <li>Theme Tweak</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Showcase</p>
            <ul className="text-gray-400">
              <li>Widgetkit</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">About Us</p>
            <ul className="text-gray-400">
              <li>Contact Us</li>
              <li>Affiliates</li>
              <li>Resources</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col items-center">
        <div className="flex space-x-4">
          <a
            href="https://github.com/MarkCnw/nexjs101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.53 2.33 1.09 2.89.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.26.1-2.63 0 0 .83-.27 2.73 1.02A9.55 9.55 0 0112 6.8c.84 0 1.69.11 2.49.33 1.9-1.3 2.73-1.02 2.73-1.02.54 1.37.2 2.38.1 2.63.63.7 1.02 1.59 1.02 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.18.58.69.48A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-2">©Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
}

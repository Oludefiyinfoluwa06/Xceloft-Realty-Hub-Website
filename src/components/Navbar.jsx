import { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/full-logo.png';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
            <img src={logo} alt="Logo" className="w-40" />
          </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`lg:flex items-center gap-4 ${isOpen ? 'absolute top-[90px] right-6 bg-white shadow-md p-5 rounded-lg space-y-6 block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            <li className="mt-2 lg:mt-0">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="mt-2 lg:mt-0">
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
            </li>
            <li className="mt-2 lg:mt-0">
              <a href="https://www.freeprivacypolicy.com/live/3e12d71d-1238-4cf3-a75a-b1266671deba" className="text-gray-700 hover:text-gray-900">Terms & Conditions</a>
            </li>
            <li className="mt-2 lg:mt-0">
              <a href="https://www.termsfeed.com/live/3ee0f5e0-c00b-4916-91ab-f5aba29eb386" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
            </li>
          </ul>
          <Button text='Get the app' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
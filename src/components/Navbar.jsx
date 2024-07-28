import { useState } from 'react';
import logo from '../assets/full-logo.png';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
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
              <a href="#about" className="text-gray-700 hover:text-gray-900">About Us</a>
            </li>
            <li className="mt-2 lg:mt-0">
              <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
            </li>
            <li className="mt-2 lg:mt-0">
              <a href="#terms" className="text-gray-700 hover:text-gray-900">Terms & Conditions</a>
            </li>
            <li className="mt-2 lg:mt-0">
              <a href="#help" className="text-gray-700 hover:text-gray-900">Help Centre</a>
            </li>
          </ul>
          <Button text='Get the app' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
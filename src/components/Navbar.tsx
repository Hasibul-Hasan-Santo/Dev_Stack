import { useState } from 'react';
import logo from '../assets/logo-text.png'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-5 flex items-center justify-between">
                
                <div className="flex items-center md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 hover:text-gray-900 focus:outline-none p-1"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                <div className="flex items-center justify-center md:justify-start">
                    <img src={logo} alt="DevStack" className="h-8 w-auto cursor-pointer" />
                </div>

                <ul className="hidden md:flex items-center space-x-8 text-base font-medium text-gray-600">
                    <li>
                        <a href="#home" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-700">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#technologies" className="hover:text-pink-600 transition-colors duration-700">
                            Technologies
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-pink-600 transition-colors duration-700">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-pink-600 transition-colors duration-700">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-pink-600 transition-colors duration-700">
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex items-center space-x-3 sm:space-x-4 text-sm sm:text-base font-medium">
                    <button className="text-gray-700 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition-all duration-700 hover:bg-purple-500 hover:text-white">
                        Sign In
                    </button>
                    <button className="bg-pink-500 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium shadow-sm hover:bg-purple-600 transition-all duration-700">
                        Sign Up
                    </button>
                </div>

            </nav>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-lg animate-fadeIn">
                    <ul className="flex flex-col space-y-4 text-base font-medium text-gray-600">
                        <li><a href="#home" onClick={() => setIsOpen(false)} className="block text-pink-600 font-semibold">Home</a></li>
                        <li><a href="#technologies" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">Technologies</a></li>
                        <li><a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">Projects</a></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">About</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
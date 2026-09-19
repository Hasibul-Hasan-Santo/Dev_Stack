import  { useState } from 'react';
import logo from '../assets/logo-text.png'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            {/* main navbar */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
                
                
                <div className="flex items-center md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 hover:text-gray-900 focus:outline-none p-1"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* logo */}
                <div className="flex items-center justify-center md:justify-start">
                    <img src={logo} alt="DevStack" className="h-7 w-auto cursor-pointer" />
                </div>

                {/* nav bar desktop ar phone er */}
                <ul className="hidden 
                md:flex items-center space-x-8 text-sm font-medium text-gray-600">
                    <li>
                        <a href="#home" 
                        className="text-pink-600 font-semibold hover:text-pink-600 transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#technologies" className="hover:text-gray-900 transition-colors">
                            Technologies
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-900 transition-colors">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-gray-900 transition-colors">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-900 transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* button */}
                <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm font-medium">
                    <button className="text-gray-700 hover:text-gray-900 px-2 py-1 sm:px-3 sm:py-2 transition-colors">
                        Sign In
                    </button>
                    <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full font-medium shadow-sm hover:opacity-90 transition-all">
                        Sign Up
                    </button>
                </div>

            </nav>

            {/* phoe er menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg animate-fadeIn">
                    <ul className="flex flex-col space-y-3 text-sm font-medium text-gray-600">
                        <li>
                            <a 
                                href="#home" 
                                onClick={() => setIsOpen(false)} 
                                className="block text-pink-600 font-semibold"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#technologies" 
                                onClick={() => setIsOpen(false)} 
                                className="block hover:text-gray-900"
                            >
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                onClick={() => setIsOpen(false)} 
                                className="block hover:text-gray-900"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                onClick={() => setIsOpen(false)} 
                                className="block hover:text-gray-900"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                onClick={() => setIsOpen(false)} 
                                className="block hover:text-gray-900"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
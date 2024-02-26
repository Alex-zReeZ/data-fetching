import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        console.log("clicked");
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`flex ${isOpen ? 'block pl-40' : 'flex-row '} items-center justify-between p-6 bg-gray-800 text-white w-full`}>
            <img src="/favicon.svg" alt="logo" className="w-12"/>

            <div
                id="menu"
                onClick={() => toggleNavbar()}
                className="lg:hidden cursor-pointer"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <>
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </>
                )}
            </div>

            <ul
                className={`${
                    isOpen ? 
                    "flex gap-10 flex-col text-xl text-center mt-24 pt-20 z-30 transform translate-x-0 transition-transform duration-200 ease-in-out lg:flex lg:items-center lg:space-x-8 absolute bg-gray-800 text-white w-96 h-full left-0 top-0 overflow-auto" : "hidden transform -translate-x-full"
                } lg:flex lg:items-center lg:space-x-8`}
            >
                <li>
                    <a href="/" className="hover:text-gray-400">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-400">About</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;